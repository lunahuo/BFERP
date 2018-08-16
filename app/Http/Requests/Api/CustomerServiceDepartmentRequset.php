<?php

namespace App\Http\Requests\Api;

use Illuminate\Validation\Rule;

class CustomerServiceDepartmentRequset extends FormRequest
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
                    'status' => 'boolean',
                ];
                break;
            case 'POST':
                return [
                    'shops_id' => [
                        'required', 'integer',
                        Rule::exists('shops', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'member_nick' => 'string|max:255',
                    'logistics_id' => [
                        'required', 'integer',
                        Rule::exists('logistics', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'billing_way' =>  [
                        'required',
                        Rule::in([
                                \App\Models\Order::ORDER_BILLING_WAY_WEIGHT,
                                \App\Models\Order::ORDER_BILLING_WAY_VOLUME
                            ]),
                    ],
                    'promise_ship_time' => 'date',
                    'freight_types_id' =>  [
                        'required', 'integer',
                        Rule::exists('freight_types', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'expected_freight' => 'numeric',
                    'distributions_id' => [
                        'required', 'integer',
                        Rule::exists('distributions', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'distribution_methods_id' => [
                        'required', 'integer',
                        Rule::exists('distribution_methods', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'deliver_goods_fee' => 'numeric',
                    'move_upstairs_fee' => 'numeric',
                    'installation_fee' => 'numeric',
                    'total_distribution_fee' => [
                        'numeric',
                        function($attribute, $value, $fail) {
                            //设置位数
                            bcscale(2);
                            //判断是否相等
                            if (
                                bccomp(
                                    bcadd(bcadd($this->deliver_goods_fee, $this->move_upstairs_fee), $this->installation_fee),
                                    $value
                                ) == 0
                            ){
                                return true;
                            }
                            return $fail('配送总计不正确');
                        },
                    ],
                    'distribution_phone' => 'string|max:255',
                    'distribution_no' => 'string|max:255',
                    'distribution_types_id' => [
                        'required', 'integer',
                        Rule::exists('distribution_types', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'service_car_info' => 'string|max:255',
                    'take_delivery_goods_fee' => 'numeric',

                    'take_delivery_goods_ways_id' => '提货方式',

                    'express_fee' => 'numeric',
                    'service_car_fee' => 'numeric',
                    'cancel_after_verification_code' => 'string|max:255',
                    'wooden_frame_costs' => 'numeric',
                    'preferential_cashback' => 'numeric',
                    'favorable_cashback' => 'numeric',

                    'customer_types_id' => '客户类型',

                    'is_invoice' => 'boolean',
                    'invoice_express_fee' => 'numeric',
                    'express_invoice_title' => 'string|max:255',
                    'contract_no' => 'string|max:255',

                    'payment_methods_id' => '付款方式',

                    'deposit' => 'numeric',
                    'document_title' => 'string|max:255',
                    'warehouses_id' => [
                        'required', 'integer',
                        Rule::exists('warehouses', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'payment_date' => 'date',
                    'interest_concessions' => 'numeric',
                    'is_notice' => 'boolean',
                    'is_cancel_after_verification' => 'boolean',
                    'accept_order_user' => 'string|max:255',
                    'tax_number' => 'string|max:255',
                    'receipt' => 'string|max:255',
                    'logistics_remark' => 'string|max:255',
                    'seller_remark' => 'string|max:255',
                    'customer_service_remark' => 'string|max:255',
                    'buyer_message' => 'string|max:255',
                    'order_items.*.products_id' =>  [
                        'required', 'integer',
                        Rule::exists('products', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'order_items.*.combinations_id' =>  [
                        'required', 'integer',
                        Rule::exists('combinations', 'id')->where(function ($query) {
                            $query->where('status', 1);
                        }),
                    ],
                    'order_items.*.quantity' => 'required|numeric',
                    'order_items.*.total_volume' => 'numeric',
                    'order_items.*.paint' => 'string|max:255',
                    'order_items.*.is_printing' => 'boolean',
                    'order_items.*.printing_fee' => 'numeric',
                    'order_items.*.is_spot_goods' => 'boolean',
                    'order_items.*.under_line_univalent' => 'numeric',
                    'order_items.*.under_line_total_amount' => 'numeric',
                    'order_items.*.under_line_preferential' => 'numeric',
                    'order_items.*.under_line_payment' => 'numeric',
                ];
                break;
            case 'PATCH':
                return [

                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'shops_id.*.id.required' => '店铺id必填',
            'shops_id.*.id.integer' => '店铺id必须int类型',
            'shops_id.*.id.exists' => '需要添加的id在数据库中未找到或未启用',

            'member_nick.required' => '会员昵称必填',
            'member_nick.string' => '会员昵称必须string类型',
            'member_nick.max' => '会员昵称最大长度为255',

            'logistics_id' => '物流id',
            'billing_way' => '计费方式',
            'promise_ship_time' => '承诺发货时间',
            'freight_types_id' => '运费类型id',
            'expected_freight' => '预计运费',
            'distributions_id' => '配送id',
            'distribution_methods_id' => '配送方式id',
            'deliver_goods_fee' => '送货费用',
            'move_upstairs_fee' => '搬楼费用',
            'installation_fee' => '安装费',
            'total_distribution_fee' => '配送总计(送货费用 + 搬楼费用 + 安装费)',
            'distribution_phone' => '配送电话',
            'distribution_no' => '配送单号',
            'distribution_types_id' => '配送类型id',
            'service_car_info' => '服务车信息（配送信息）',
            'take_delivery_goods_fee' => '提货费用',
            'take_delivery_goods_ways_id' => '提货方式',
            'express_fee' => '快递费用',
            'service_car_fee' => '服务车金额（家装服务）',
            'cancel_after_verification_code' => '核销码',
            'wooden_frame_costs' => '木架费',
            'preferential_cashback' => '优惠返现',
            'favorable_cashback' => '好评返现',
            'customer_types_id' => '客户类型',
            'is_invoice' => '是否要发票',
            'invoice_express_fee' => '发票快递费',
            'express_invoice_title' => '快递发票抬头',
            'contract_no' => '合同单号',
            'payment_methods_id' => '付款方式',
            'deposit' => '订金',
            'document_title' => '单据头',
            'warehouses_id' => '发货仓库id',
            'payment_date' => '支付日期',
            'interest_concessions' => '让利',
            'is_notice' => '等通知发货 0 否 1 是',
            'is_cancel_after_verification' => '是否核销 0 否 1 是',
            'accept_order_user' => '接单用户',
            'tax_number' => '税号',
            'receipt' => '收据',
            'logistics_remark' => '物流备注',
            'seller_remark' => '卖家备注',
            'customer_service_remark' => '客服备注',
            'buyer_message' => '买家留言',
        ];
    }

    public function attributes()
    {
        return [
            'shops_id' => '店铺id',
            'member_nick' => '会员昵称',
            'logistics_id' => '物流id',
            'billing_way' => '计费方式',
            'promise_ship_time' => '承诺发货时间',
            'freight_types_id' => '运费类型id',
            'expected_freight' => '预计运费',
            'distributions_id' => '配送id',
            'distribution_methods_id' => '配送方式id',
            'deliver_goods_fee' => '送货费用',
            'move_upstairs_fee' => '搬楼费用',
            'installation_fee' => '安装费',
            'total_distribution_fee' => '配送总计(送货费用 + 搬楼费用 + 安装费)',
            'distribution_phone' => '配送电话',
            'distribution_no' => '配送单号',
            'distribution_types_id' => '配送类型id',
            'service_car_info' => '服务车信息（配送信息）',
            'take_delivery_goods_fee' => '提货费用',
            'take_delivery_goods_ways_id' => '提货方式',
            'express_fee' => '快递费用',
            'service_car_fee' => '服务车金额（家装服务）',
            'cancel_after_verification_code' => '核销码',
            'wooden_frame_costs' => '木架费',
            'preferential_cashback' => '优惠返现',
            'favorable_cashback' => '好评返现',
            'customer_types_id' => '客户类型',
            'is_invoice' => '是否要发票',
            'invoice_express_fee' => '发票快递费',
            'express_invoice_title' => '快递发票抬头',
            'contract_no' => '合同单号',
            'payment_methods_id' => '付款方式',
            'deposit' => '订金',
            'document_title' => '单据头',
            'warehouses_id' => '发货仓库id',
            'payment_date' => '支付日期',
            'interest_concessions' => '让利',
            'is_notice' => '等通知发货 0 否 1 是',
            'is_cancel_after_verification' => '是否核销 0 否 1 是',
            'accept_order_user' => '接单用户',
            'tax_number' => '税号',
            'receipt' => '收据',
            'logistics_remark' => '物流备注',
            'seller_remark' => '卖家备注',
            'customer_service_remark' => '客服备注',
            'buyer_message' => '买家留言',
        ];
    }
}