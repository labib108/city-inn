import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import './BookingForm.css';

// Using available icons as placeholders since specific seating icons were not found
// In a real scenario, you'd replace these paths with the specific seating icons
const seatingOptions = [
    { id: 'banquet', label: 'Banquet', icon: '/images/icons/capacity.png' },
    { id: 'cabaret', label: 'Cabaret', icon: '/images/icons/capacity.png' },
    { id: 'classroom', label: 'Class Room', icon: '/images/icons/capacity.png' },
    { id: 'meeting_room', label: 'Meeting Room', icon: '/images/icons/capacity.png' },
    { id: 'theater', label: 'Theater', icon: '/images/icons/capacity.png' },
    { id: 'u_room', label: 'U-Room', icon: '/images/icons/capacity.png' },
    { id: 'dont_know', label: 'I Dont Know Yet', icon: '/images/icons/search.png' }
];

const BookingForm: React.FC = () => {
    const [step, setStep] = useState(1);

    // Inertia Form
    const { data, setData, post, processing, errors } = useForm({
        startDate: '',
        endDate: '',
        datesFlexible: '',
        serviceType: {
            accommodation: false,
            events: false
        },
        venue: '',
        attendants: '',
        eventType: '',
        otherEventType: '',
        eventRequirements: {
            food: false,
            audio: false,
            logistics: false,
            decoration: false
        },
        seatingArrangement: [] as string[],

        // Step 2
        firstName: '',
        lastName: '',
        email: '',
        callingCode: '',
        phoneNumber: '',
        addressType: {
            business: false,
            personal: false
        },
        companyName: '',
        addressLine1: '',
        addressLine2: '',
        country: '',
        city: '',
        state: '',
        zipCode: '',
        additionalInfo: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        // @ts-ignore
        setData(prev => ({ ...prev, [name]: value }));
    };

    // Special handler for checkboxes/nested
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;

        if (['accommodation', 'events'].includes(name)) {
            setData('serviceType', { ...data.serviceType, [name]: checked });
        } else if (['food', 'audio', 'logistics', 'decoration'].includes(name)) { // keys must match initial state keys
            setData('eventRequirements', { ...data.eventRequirements, [name]: checked });
        } else if (['business', 'personal'].includes(name)) {
            setData('addressType', { ...data.addressType, [name]: checked });
        }
    };

    const handleSeatingToggle = (id: string) => {
        const current = data.seatingArrangement;
        if (current.includes(id)) {
            setData('seatingArrangement', current.filter(item => item !== id));
        } else {
            setData('seatingArrangement', [...current, id]);
        }
    };

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(2);
        window.scrollTo(0, 0);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/booking', {
            onSuccess: () => {
                alert('Booking Request Submitted Successfully!');
                // Reset or redirect logic if needed handled by controller redirect
            },
            onError: (errors) => {
                console.error('Submission errors:', errors);
                alert('Please check the form for errors.');
            }
        });
    };

    return (
        <div className="booking-form-container">
            {step === 1 && <h1 className="booking-main-title">Book The Event Venue</h1>}
            {step === 2 && <h1 className="booking-main-title">Phone number and Email</h1>}

            <form onSubmit={step === 1 ? handleNext : handleSubmit}>
                {step === 1 && (
                    <div className="booking-step-1">
                        <h2 className="booking-subtitle">Guest Profile and Details</h2>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Start Date</label>
                                <div className="input-with-icon">
                                    <input
                                        type="date"
                                        name="startDate"
                                        className="form-input"
                                        value={data.startDate}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.startDate && <div className="error-text">{errors.startDate}</div>}
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">End Date</label>
                                <div className="input-with-icon">
                                    <input
                                        type="date"
                                        name="endDate"
                                        className="form-input"
                                        value={data.endDate}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.endDate && <div className="error-text">{errors.endDate}</div>}
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Are your Dates Flexible ?</label>
                            <select
                                name="datesFlexible"
                                className="form-select"
                                value={data.datesFlexible}
                                onChange={handleChange}
                            >
                                <option value=""></option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>

                        <h3 className="booking-text-heading">Could you Please confirm the Service you intend to Book ?</h3>

                        <div className="checkbox-group">
                            <label className="custom-checkbox-label">
                                <input
                                    type="checkbox"
                                    name="accommodation"
                                    checked={data.serviceType.accommodation}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                                Accommodation
                            </label>
                            <label className="custom-checkbox-label">
                                <input
                                    type="checkbox"
                                    name="events"
                                    checked={data.serviceType.events}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                                Events
                            </label>
                        </div>

                        {data.serviceType.events && (
                            <>
                                <h1 className="booking-section-title">Events</h1>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Select Any Venue</label>
                                        <select
                                            name="venue"
                                            className="form-select"
                                            value={data.venue}
                                            onChange={handleChange}
                                        >
                                            <option value=""></option>
                                            <option value="hall_a">Grand Hall A</option>
                                            <option value="hall_b">Grand Hall B</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Attendents</label>
                                        <input
                                            type="text"
                                            name="attendants"
                                            className="form-input"
                                            value={data.attendants}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label className="form-label">Select An Event Type</label>
                                        <select
                                            name="eventType"
                                            className="form-select"
                                            value={data.eventType}
                                            onChange={handleChange}
                                        >
                                            <option value=""></option>
                                            <option value="wedding">Wedding</option>
                                            <option value="conference">Conference</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">If other, please Specify</label>
                                        <input
                                            type="text"
                                            name="otherEventType"
                                            className="form-input"
                                            value={data.otherEventType}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="checkbox-group full-width-checkboxes">
                                        <label className="custom-checkbox-label">
                                            <input type="checkbox" name="food" checked={data.eventRequirements.food} onChange={handleCheckboxChange} />
                                            <span className="checkmark"></span>
                                            Food and Beverages
                                        </label>
                                        <label className="custom-checkbox-label">
                                            <input type="checkbox" name="audio" checked={data.eventRequirements.audio} onChange={handleCheckboxChange} />
                                            <span className="checkmark"></span>
                                            Audio & Visual
                                        </label>
                                        <label className="custom-checkbox-label">
                                            <input type="checkbox" name="logistics" checked={data.eventRequirements.logistics} onChange={handleCheckboxChange} />
                                            <span className="checkmark"></span>
                                            Logistics
                                        </label>
                                        <label className="custom-checkbox-label">
                                            <input type="checkbox" name="decoration" checked={data.eventRequirements.decoration} onChange={handleCheckboxChange} />
                                            <span className="checkmark"></span>
                                            Decoration
                                        </label>
                                    </div>
                                </div>

                                <h2 className="booking-subtitle" style={{ fontSize: '1.8rem', marginTop: '2rem' }}>Choose Your Seating Arrangment</h2>
                                <div className="seating-arrangement-grid">
                                    {seatingOptions.map(option => (
                                        <div
                                            key={option.id}
                                            className={`seating-card ${data.seatingArrangement.includes(option.id) ? 'selected' : ''}`}
                                            onClick={() => handleSeatingToggle(option.id)}
                                        >
                                            <div className="seating-card-content">
                                                <div className="seating-checkbox">
                                                    <div className={`custom-box ${data.seatingArrangement.includes(option.id) ? 'checked' : ''}`}></div>
                                                </div>
                                                <img src={option.icon} alt={option.label} className="seating-icon" />
                                            </div>
                                            <span className="seating-name">{option.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}

                        <div className="form-btn-container right-align">
                            <button type="submit" className="form-submit-btn">CONTINUE</button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="booking-step-2">
                        {/* Title handled above to switch */}

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">First Name</label>
                                <input type="text" name="firstName" className="form-input" value={data.firstName} onChange={handleChange} required />
                                {errors.firstName && <div className="error-text">{errors.firstName}</div>}
                            </div>
                            <div className="form-group">
                                <label className="form-label">Last Name</label>
                                <input type="text" name="lastName" className="form-input" value={data.lastName} onChange={handleChange} required />
                                {errors.lastName && <div className="error-text">{errors.lastName}</div>}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input type="email" name="email" className="form-input" value={data.email} onChange={handleChange} required />
                            {errors.email && <div className="error-text">{errors.email}</div>}
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Calling Code</label>
                                <input type="text" name="callingCode" className="form-input" value={data.callingCode} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input type="tel" name="phoneNumber" className="form-input" value={data.phoneNumber} onChange={handleChange} required />
                                {errors.phoneNumber && <div className="error-text">{errors.phoneNumber}</div>}
                            </div>
                        </div>

                        <h2 className="booking-subtitle" style={{ fontSize: '2rem', borderBottom: 'none' }}>Address</h2>

                        <div className="checkbox-group">
                            <label className="custom-checkbox-label">
                                <input
                                    type="checkbox"
                                    name="business"
                                    checked={data.addressType.business}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                                Business
                            </label>
                            <label className="custom-checkbox-label">
                                <input
                                    type="checkbox"
                                    name="personal"
                                    checked={data.addressType.personal}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="checkmark"></span>
                                Personal
                            </label>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                className="form-input company-input"
                                value={data.companyName}
                                onChange={handleChange}
                                style={{ backgroundColor: '#e0e0e0' }} // Gray background as per design
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Address</label>
                                <input type="text" name="addressLine1" className="form-input" value={data.addressLine1} onChange={handleChange} required />
                                {errors.addressLine1 && <div className="error-text">{errors.addressLine1}</div>}
                            </div>
                            <div className="form-group">
                                <label className="form-label">Address line 2</label>
                                <input type="text" name="addressLine2" className="form-input" value={data.addressLine2} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">Country / Region</label>
                                <input type="text" name="country" className="form-input" value={data.country} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label className="form-label">City</label>
                                <input type="text" name="city" className="form-input" value={data.city} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">State / Province</label>
                                <input type="text" name="state" className="form-input" value={data.state} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Zip Code</label>
                                <input type="text" name="zipCode" className="form-input" value={data.zipCode} onChange={handleChange} required />
                            </div>
                        </div>

                        <h2 className="booking-subtitle" style={{ fontSize: '2rem', borderBottom: 'none' }}>Additional Information</h2>
                        <div className="form-group">
                            <textarea
                                name="additionalInfo"
                                className="form-textarea"
                                rows={8}
                                value={data.additionalInfo}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-btn-container right-align">
                            <button type="submit" className="form-submit-btn" disabled={processing}>
                                {processing ? 'SUBMITTING...' : 'SUBMIT'}
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default BookingForm;
