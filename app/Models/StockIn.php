<?php

namespace App\Models;

use Carbon\Carbon;

class StockIn extends Model
{
    protected $table = 'stock_ins';

    protected $fillable = [
        'stock_in_no', 'warehouse_id', 'stock_in_types_id', 'creator',
        'submitter', 'submit_at', 'checker', 'check_at', 'warehouer',
        'stock_in_at', 'is_submit', 'is_check', 'is_stock_in','status',
        'print_at', 'is_print'
    ];

    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub
        // 监听模型创建事件，在写入数据库之前触发
        static::creating(function($model){
            // 如果模型的 no 字段为空
            if(!$model->stock_in_no){
                // 调用 findAvailableNo 生成订单流水号
                $model->stock_in_no = static::findAvailableNo();
                // 如果生成失败，则终止创建订单
                if(!$model->stock_in_no){
                    return false;
                }
            }
            // 如果模型的 creator 字段为空
            if(!$model->creator){

                $model->creator = 'admin';
                // 如果生成失败，则终止创建订单
                if(!$model->creator){
                    return false;
                }
            }
        });
    }

    public function warehouse(){
        return $this->belongsTo(Warehouse::class,'warehouse_id');
    }

    public function stockInType()
    {
        return $this->belongsTo(StockInType::class,'stock_in_types_id');
    }

    public function stockInDetails()
    {
        return $this->hasMany(StockInDetail::class,'stock_ins_id');
    }

    /**
     * 提交
     */
    public function input()
    {
        $this->submit_at = Carbon::now();
        $this->submitter = 'admin';
        $this->is_submit = 1;
        $this->save();
    }

    /**
     * 审核
     */
    public function check()
    {
        $this->check_at = Carbon::now();
        $this->checker = 'admin';
        $this->is_check = 1;
        $this->save();
    }

    /**
     * 打印
     */
    public function print()
    {
        $this->print_at = Carbon::now();
        $this->is_print = 1;
        $this->save();
    }

    public static function findAvailableNo()
    {
        // 订单流水号前缀
        //PR:Purchase Request Form 采购申请单,公司内部使用;
        //PO:Purchase Order Form 采购订单,公司对外使用。
        $prefix = 'IS';

        for ($i = 0; $i < 10; $i++) {
            // 随机生成 6 位的数字
            $no = $prefix . date('YmdHis') . str_pad(mt_rand(1, 99999), 5, 0, STR_PAD_LEFT);
            // 判断是否已经存在
            if (!static::query()->where('stock_in_no', $no)->exists()) {
                return $no;
            }
        }

        return false;
    }
}
