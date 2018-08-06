<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DamagedGoods extends Model
{
    protected $table = 'damaged_goods';

    protected $fillable = [
        'order_no', 'good_sn', 'standard_code', 'quantity',
        'money', 'remark'
    ];

    //设置类型
    protected $casts = [
        'status' => 'boolean'
    ];

}
