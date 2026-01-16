<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class BookingController extends Controller
{
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Validation rules matching Frontend camelCase fields
        $validated = $request->validate([
            'startDate' => 'required|date',
            'endDate' => 'required|date|after_or_equal:startDate',
            'datesFlexible' => 'nullable|string',
            'venue' => 'nullable|string',
            'attendants' => 'nullable|string',
            'eventType' => 'nullable|string',
            'otherEventType' => 'nullable|string',
            'seatingArrangement' => 'nullable|array',
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phoneNumber' => 'required|string|max:20',
            'addressLine1' => 'required|string|max:255',
            'country' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'zipCode' => 'required|string|max:20',
        ]);

        // Map camelCase inputs to snake_case model attributes
        $bookingData = [];
        
        $bookingData['start_date'] = $request->input('startDate');
        $bookingData['end_date'] = $request->input('endDate');
        $bookingData['dates_flexible'] = $request->input('datesFlexible');
        
        // Service Type
        if ($request->has('serviceType')) {
            $bookingData['has_accommodation'] = $request->input('serviceType.accommodation') ?? false;
            $bookingData['has_events'] = $request->input('serviceType.events') ?? false;
        }

        $bookingData['venue'] = $request->input('venue');
        $bookingData['attendants_count'] = $request->input('attendants');
        $bookingData['event_type'] = $request->input('eventType');
        $bookingData['other_event_type'] = $request->input('otherEventType');

        // Event Requirements
        if ($request->has('eventRequirements')) {
            $bookingData['needs_food_bev'] = $request->input('eventRequirements.food') ?? false;
            $bookingData['needs_audio_visual'] = $request->input('eventRequirements.audio') ?? false;
            $bookingData['needs_logistics'] = $request->input('eventRequirements.logistics') ?? false;
            $bookingData['needs_decoration'] = $request->input('eventRequirements.decoration') ?? false;
        }
        
        $bookingData['seating_arrangement'] = $request->input('seatingArrangement');
        
        // Personal Info
        $bookingData['first_name'] = $request->input('firstName');
        $bookingData['last_name'] = $request->input('lastName');
        $bookingData['email'] = $request->input('email');
        $bookingData['calling_code'] = $request->input('callingCode');
        $bookingData['phone_number'] = $request->input('phoneNumber');
        
        // Address Type
        // Frontend sends: addressType: { business: bool, personal: bool }
        // We need to resolve this to a string. Priority to Business if both checked? Or formatted string?
        // Let's check which is strictly true.
        $hasBusiness = $request->input('addressType.business');
        $hasPersonal = $request->input('addressType.personal');
        
        if ($hasBusiness) {
            $bookingData['address_type'] = 'business';
        } elseif ($hasPersonal) {
            $bookingData['address_type'] = 'personal';
        } else {
            $bookingData['address_type'] = 'personal'; // default
        }

        $bookingData['company_name'] = $request->input('companyName');
        $bookingData['address_line_1'] = $request->input('addressLine1');
        $bookingData['address_line_2'] = $request->input('addressLine2');
        $bookingData['country'] = $request->input('country');
        $bookingData['city'] = $request->input('city');
        $bookingData['state'] = $request->input('state');
        $bookingData['zip_code'] = $request->input('zipCode');
        $bookingData['additional_info'] = $request->input('additionalInfo');

        // Create booking
        Booking::create($bookingData);

        return Redirect::back()->with('success', 'Booking Request Submitted Successfully!');
    }
}
