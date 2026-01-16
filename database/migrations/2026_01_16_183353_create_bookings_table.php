<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            
            // Step 1: Guest Profile and Details
            $table->date('start_date');
            $table->date('end_date');
            $table->string('dates_flexible')->default('no'); // 'yes' or 'no'
            
            // Service Type
            $table->boolean('has_accommodation')->default(false);
            $table->boolean('has_events')->default(false);
            
            // Event Details (Nullable as they depend on has_events)
            $table->string('venue')->nullable();
            $table->string('attendants')->nullable(); // Keeping as string in case "100-200" is entered, or integer if strict. Form has number input but users might want flexible. Let's use string for safety or integer if strict. Input type is number in form? Yes. Let's use integer but nullable.
            // Actually form input is number, but attendants might be approximate. Let's use integer.
            // Wait, looking at form code: <input type="number" ... /> OK integer.
            //$table->integer('attendants')->nullable(); 
            // Re-evaluating: Plan says integer. Let's stick to string to be safe against copy-paste "approx 50" if validation isn't strict? 
            // The form input type is "text" in one place and "number" in another?
            // In BookingForm.tsx: "text" initially, then updated to "number". 
            // Let's use string to be safe, or integer if we rely on HTML5 validation.
            // Plan said integer. Let's use string to avoid SQL errors if frontend validation is bypassed or changed.
            $table->string('attendants_count')->nullable(); // renaming to avoid confusion if I use string
            
            $table->string('event_type')->nullable();
            $table->string('other_event_type')->nullable();
            
            // Requirements
            $table->boolean('needs_food_bev')->default(false);
            $table->boolean('needs_audio_visual')->default(false);
            $table->boolean('needs_logistics')->default(false);
            $table->boolean('needs_decoration')->default(false);
            
            $table->json('seating_arrangement')->nullable();
            
            // Step 2: Contact Info
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email');
            $table->string('calling_code')->nullable();
            $table->string('phone_number');
            
            // Address
            $table->string('address_type')->default('personal'); // 'business' or 'personal'
            $table->string('company_name')->nullable();
            $table->string('address_line_1');
            $table->string('address_line_2')->nullable();
            $table->string('country');
            $table->string('city');
            $table->string('state')->nullable();
            $table->string('zip_code');
            
            $table->text('additional_info')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
