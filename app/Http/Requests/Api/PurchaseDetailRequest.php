<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class PurchaseDetailRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        switch ($this->method()) {
            case 'GET':
                return [
                    'status' => 'integer'
                ];
                break;
            case 'POST':
                return [
                    'purchase_details.*.product_specs_id' => [
                        'required', 'integer',
                        Rule::exists('product_specs', 'id')
                    ],
                    'purchase_details.*.purchase_quantity' => 'required|integer|min:1',
                    'purchase_details.*.shops_id' => [
                        'integer',
                        Rule::exists('shops', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'purchase_details.*.suppliers_id' => [
                        'integer',
                        Rule::exists('shops', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'purchase_details.*.purchase_cost' => 'numeric',
                    'purchase_details.*.purchase_freight' => 'numeric',
                    'purchase_details.*.warehouse_cost' => 'numeric',
                    'purchase_details.*.commission' => 'numeric',
                    'purchase_details.*.discount' => 'numeric',
                    'purchase_details.*.colour_num' => 'string|max:255',
                    'purchase_details.*.paint' => 'string|max:255',
                    'purchase_details.*.wooden_frame_costs' => 'numeric',
                    'purchase_details.*.arrival_time' => 'date',
                    'purchase_details.*.remark' => 'string|nullable|max:255'
                ];
                break;
            case 'PATCH':
                return [
                    'purchase_details.*.id' => [
                        'integer',
                        Rule::exists('purchase_details', 'id')
                    ],
                    'purchase_details.*.product_specs_id' => [
                        'integer',
                        Rule::exists('product_specs', 'id')
                    ],
                    'purchase_details.*.purchase_quantity' => ['integer', 'min:1'],
                    'purchase_details.*.shops_id' => [
                        'integer',
                        Rule::exists('shops', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'purchase_details.*.suppliers_id' => [
                        'integer',
                        Rule::exists('shops', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'purchase_details.*.purchase_cost' => ['numeric'],
                    'purchase_details.*.purchase_freight' => ['numeric'],
                    'purchase_details.*.warehouse_cost' => ['numeric'],
                    'purchase_details.*.commission' => ['numeric'],
                    'purchase_details.*.discount' => ['numeric'],
                    'purchase_details.*.colour_num' => ['string', 'max:255'],
                    'purchase_details.*.paint' => ['string', 'max:255'],
                    'purchase_details.*.wooden_frame_costs' => ['numeric'],
                    'purchase_details.*.arrival_time' => ['date'],
                    'purchase_details.*.remark' => ['string', 'nullable', 'max:255'],
                ];
                break;
        }
    }

    public
        function messages()
    {
        return [
            'purchase_details.*.id.required' => '采购详情id必填',
            'purchase_details.*.id.integer' => '采购详情id必须int类型',
            'purchase_details.*.id.exists' => '需要添加的id在数据库中未找到或未启用',

            'purchase_details.*.product_specs_id.required' => '产品规格id必填',
            'purchase_details.*.product_specs_id.integer' => '产品规格id必须int类型',
            'purchase_details.*.product_specs_id.exists' => '需要添加的id在数据库中未找到或未启用',

            'purchase_details.*.purchase_quantity.required' => '采购数必填',
            'purchase_details.*.purchase_quantity.integer' => '采购数必须int类型',
            'purchase_details.*.purchase_quantity.min' => '采购数不少于1',

            'purchase_details.*.shops_id.integer' => '采购店铺id必须int类型',
            'purchase_details.*.shops_id.exists' => '需要添加的id在数据库中未找到或未启用',

            'purchase_details.*.suppliers_id.integer' => '供应商id必须int类型',
            'purchase_details.*.suppliers_id.exists' => '需要添加的id在数据库中未找到或未启用',

            'purchase_details.*.purchase_cost.numeric' => '采购成本必须是数字',

            'purchase_details.*.purchase_freight.numeric' => '采购运费必须是数字',

            'purchase_details.*.warehouse_cost.numeric' => '仓库成本必须是数字',

            'purchase_details.*.commission.numeric' => '金佣点',

            'purchase_details.*.discount.numeric' => '折扣',

            'purchase_details.*.colour_num.max' => '色号最大长度为255',
            'purchase_details.*.colour_num.string' => '色号必须string类型',

            'purchase_details.*.paint.max' => '油漆最大长度为255',
            'purchase_details.*.paint.string' => '油漆必须string类型',

            'purchase_details.*.wooden_frame_costs.numeric' => '木架费',

            'purchase_details.*.arrival_time.date' => '到货时间必须data类型',

            'purchase_details.*.remark.string' => '备注必须string类型',
            'purchase_details.*.remark.nullable' => '备注可为null',
            'purchase_details.*.remark.max' => '备注最大长度为255',

        ];
    }

    public
        function attributes()
    {
        return [
            'purchases_id' => '采购id',
            'product_specs_id' => '产品规格id',
            'purchase_quantity' => '采购数',
            'shops_id' => '采购店铺id',
            'suppliers_id' => '供应商id',
            'purchase_cost' => '采购成本',
            'purchase_freight' => '采购运费',
            'warehouse_cost' => '仓库成本',
            'commission' => '金佣点',
            'discount' => '折扣',
            'colour_num' => '色号',
            'paint' => '油漆',
            'wooden_frame_costs' => '木架费',
            'arrival_time' => '到货时间',
            'remark' => '备注',
        ];
    }
}
