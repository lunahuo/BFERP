<?php

namespace App\Http\Requests\Api;

class StockInTypeRequest extends FormRequest
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
                    'name' => 'required|string',
                    'status' => 'integer'
                ];
                break;
            case 'PATCH':
                return [
                    'name' => 'string',
                    'status' => 'integer',
                ];
                break;
        }
    }

    public function messages()
    {
        return [
            'status.integer' => '状态必须int类型',
            'status.required' => '状态必填',
            'name.required' => '入库类型名称必填',
            'name.string' => '入库类型名称必须string类型',
        ];
    }

    public function attributes()
    {
        return [
            'name' => '入库类型名称',
            'status' => '状态'
        ];
    }

}