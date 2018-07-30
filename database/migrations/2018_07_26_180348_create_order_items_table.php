<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderItemsTable extends Migration
{
    /**
     * Run the migrations.
     * 子订单表
     * @return void
     */
    public function up()
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('orders_id')->comment('订单id');
            $table->unsignedInteger('goods_id')->comment('商品id');
            $table->unsignedInteger('product_specs_id')->comment('产品规格id');
            $table->integer('quantity')->comment("数量");
            $table->string('paint')->comment("油漆");
            $table->tinyInteger('is_printing')->default(0)->comment('是否需要印刷');
            $table->decimal('printing_fee')->default(0.00)->comment('印刷费用');
            $table->tinyInteger('is_spot_goods')->default(0)->comment('是否现货');
            $table->decimal('under_line_univalent')->default(0.00)->comment('线下单价');
            $table->decimal('under_line_total_amount')->default(0.00)->comment('线下金额（数量+单价）');
            $table->decimal('under_line_preferential')->default(0.00)->comment('优惠（线下）');
            $table->decimal('under_line_payment')->default(0.00)->comment('实际支付金额（线下）（线下金额 - 优惠）');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_items');
    }
}
