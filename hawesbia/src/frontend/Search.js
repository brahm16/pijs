import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div style={{paddingTop:"10rem"}}>
                <div className="search_tour">
            <div className="wrap">
                <div className="wrap_float">
                    <div className="search_tour_form">
                        <h2 className="section_subtitle">
                        CUSTOMIZE YOUR TOUR
                        </h2>
                       
                        <div className="fields__block">
                            <div className="fields">
                                <div className="field">
                                    <div className="label">Keywords</div>
                                    <div className="field_wrap keywords">
                                        <input type="text" className="input" />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label">Activity</div>
                                    <div className="field_wrap select_field">
                                        <select name="tour-activity">
                                         <option value="">Any</option>
                                         <option value="city-tours">City Tours</option>
                                         <option value="cultural-thematic-tours">Cultural &amp; Thematic Tours</option>
                                         <option value="family-friendly-tours">Family Friendly Tours</option>
                                         <option value="holiday-seasonal-tours">Holiday &amp; Seasonal Tours</option>
                                         <option value="indulgence-luxury-tours">Indulgence &amp; Luxury Tours</option>
                                         <option value="outdoor-activites">Outdoor Activites</option>
                                         <option value="relaxation-tours">Relaxation Tours</option>
                                         <option value="wild-adventure-tours">Wild &amp; Adventure Tours</option>
                                     </select>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label">Destination</div>
                                    <div className="field_wrap select_field">
                                        <select name="tour-activity">
                                         <option value="">Any</option>
                                         <option value="city-tours">City Tours</option>
                                         <option value="cultural-thematic-tours">Cultural &amp; Thematic Tours</option>
                                         <option value="family-friendly-tours">Family Friendly Tours</option>
                                         <option value="holiday-seasonal-tours">Holiday &amp; Seasonal Tours</option>
                                         <option value="indulgence-luxury-tours">Indulgence &amp; Luxury Tours</option>
                                         <option value="outdoor-activites">Outdoor Activites</option>
                                         <option value="relaxation-tours">Relaxation Tours</option>
                                         <option value="wild-adventure-tours">Wild &amp; Adventure Tours</option>
                                     </select>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label">Duration</div>
                                    <div className="field_wrap select_field">
                                        <select name="tour-activity">
                                         <option value="">Any</option>
                                         <option value="city-tours">City Tours</option>
                                         <option value="cultural-thematic-tours">Cultural &amp; Thematic Tours</option>
                                         <option value="family-friendly-tours">Family Friendly Tours</option>
                                         <option value="holiday-seasonal-tours">Holiday &amp; Seasonal Tours</option>
                                         <option value="indulgence-luxury-tours">Indulgence &amp; Luxury Tours</option>
                                         <option value="outdoor-activites">Outdoor Activites</option>
                                         <option value="relaxation-tours">Relaxation Tours</option>
                                         <option value="wild-adventure-tours">Wild &amp; Adventure Tours</option>
                                     </select>
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="label">Date</div>
                                    <div className="field_wrap calendar_field">
                                        <input type="text" className="calendar js_calendar" />
                                    </div>
                                </div>
                            </div>
                            <button className="submit"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


            </div>
                    )
    }
}
