<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'start_date',
        'end_date',
        'dates_flexible',
        'has_accommodation',
        'has_events',
        'venue',
        'attendants_count',
        'event_type',
        'other_event_type',
        'needs_food_bev',
        'needs_audio_visual',
        'needs_logistics',
        'needs_decoration',
        'seating_arrangement',
        'first_name',
        'last_name',
        'email',
        'calling_code',
        'phone_number',
        'address_type',
        'company_name',
        'address_line_1',
        'address_line_2',
        'country',
        'city',
        'state',
        'zip_code',
        'additional_info',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
        'has_accommodation' => 'boolean',
        'has_events' => 'boolean',
        'needs_food_bev' => 'boolean',
        'needs_audio_visual' => 'boolean',
        'needs_logistics' => 'boolean',
        'needs_decoration' => 'boolean',
        'seating_arrangement' => 'array',
    ];
}
