import React from 'react';
import axios from 'axios';
import { useState } from 'react';


const Employee = () => {
    const submitForm = async (event) => {
        event.preventDefault();

        // Replace 'YOUR_FORM_ACTION_URL' with the Google Forms action URL
        const formActionURL = 'https://docs.google.com/forms/d/e/.../formResponse';

        try {
            await axios.post(formActionURL, {
                entry1: event.target.question1.value,
                entry2: event.target.question2.value,
                // Add more entries for each question
            });
            // Form submission successful
            console.log('Form submitted successfully');
        } catch (error) {
            // Handle error
            console.error('Form submission error:', error);
        }
    };

    const [role, setRole] = useState('');
    const [otherRole, setOtherRole] = useState('');

    const handleRoleChange = (event) => {
        const selectedRole = event.target.value;
        setRole(selectedRole);
    };

    const handleOtherRoleChange = (event) => {
        const otherSelectedRole = event.target.value;
        setOtherRole(otherSelectedRole);
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-black shadow-xl p-4 px-14 m-4 mx-10 rounded-lg bg-gray-200">
                <h1 className='text-5xl font-thin p-4'>Persona Sync</h1>
            </div>

            <div className='text-3xl font-mono m-5'>
                <h2>EmployeeId : E98388</h2>
                <h2>Employee Name : Simon</h2>
            </div>

            <div className="w-1/2 p-6 bg-gray-100 shadow-md rounded-md mb-20" onSubmit={submitForm}>
                <div className="mb-4">
                    <label htmlFor="question1" className="block font-bold mb-2">
                        Are you more of an introvert or an extrovert?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question1" value="introvert" className="mr-2" />
                        <label>Introvert</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question1" value="extrovert" className="mr-2" />
                        <label>Extrovert</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Do you prefer reading books, playing video games, or watching movies?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question2" value="reading" className="mr-2" />
                        <label>Reading books</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question2" value="video_games" className="mr-2" />
                        <label>Playing video games</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question2" value="movies" className="mr-2" />
                        <label>Watching movies</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Are you a morning person or a night owl?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question3" value="morning_person" className="mr-2" />
                        <label>Morning person</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question3" value="night_owl" className="mr-2" />
                        <label>Night owl</label>
                    </div>
                </div>

                {/* Add more questions and options following the same structure */}

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Do you enjoy being spontaneous or having a plan?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question4" value="spontaneous" className="mr-2" />
                        <label>Spontaneous</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question4" value="having_a_plan" className="mr-2" />
                        <label>Having a plan</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Would you rather spend a day at the beach or in the mountains?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question5" value="beach" className="mr-2" />
                        <label>A day at the beach</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question5" value="mountains" className="mr-2" />
                        <label>A day in the mountains</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Are you more of a cat person or a dog person?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question6" value="cat_person" className="mr-2" />
                        <label>Cat person</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question6" value="dog_person" className="mr-2" />
                        <label>Dog person</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Do you prefer sweet or savoury foods?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question7" value="sweet" className="mr-2" />
                        <label>Sweet</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question7" value="savoury" className="mr-2" />
                        <label>Savoury</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Are you more of a leader or a follower?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question8" value="leader" className="mr-2" />
                        <label>A Leader</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question8" value="follower" className="mr-2" />
                        <label>A Follower</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Do you enjoy outdoor activities or indoor activities?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question9" value="outdoor_activities" className="mr-2" />
                        <label>Outdoor activities</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question9" value="indoor_activities" className="mr-2" />
                        <label>Indoor activities</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Are you more logical or creative?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question10" value="logical" className="mr-2" />
                        <label>Logical</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question10" value="creative" className="mr-2" />
                        <label>Creative</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Do you prefer a busy city life or a quiet countryside?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question11" value="city_life" className="mr-2" />
                        <label>Busy city life</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question11" value="countryside" className="mr-2" />
                        <label>Quiet countryside</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Are you a risk-taker or do you prefer playing it safe?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question12" value="risk_taker" className="mr-2" />
                        <label>Risk-taker</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question12" value="playing_it_safe" className="mr-2" />
                        <label>Playing it safe</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Do you enjoy cooking or eating out?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question13" value="cooking" className="mr-2" />
                        <label>Cooking</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question13" value="eating_out" className="mr-2" />
                        <label>Eating out</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Are you more of a listener or a talker?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question14" value="listener" className="mr-2" />
                        <label>Listener</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question14" value="talker" className="mr-2" />
                        <label>Talker</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Would you rather travel to the past or the future?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question15" value="past" className="mr-2" />
                        <label>Past</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question15" value="future" className="mr-2" />
                        <label>Future</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Do you prefer hot weather or cold weather?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question16" value="hot_weather" className="mr-2" />
                        <label>Hot weather</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question16" value="cold_weather" className="mr-2" />
                        <label>Cold weather</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Are you more of a planner or do you like to go with the flow?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question17" value="planner" className="mr-2" />
                        <label>Planner</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question17" value="go_with_the_flow" className="mr-2" />
                        <label>Go with the flow</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Do you enjoy team sports or individual sports?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question18" value="team_sports" className="mr-2" />
                        <label>Team sports</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question18" value="individual_sports" className="mr-2" />
                        <label>Individual sports</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Are you more of a hot drink or cold drink person?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question19" value="hot_drink" className="mr-2" />
                        <label>Hot drink</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question19" value="cold_drink" className="mr-2" />
                        <label>Cold drink</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        Do you prefer watching sports or playing sports?
                    </label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="question20" value="watching" className="mr-2" />
                        <label>Watching</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" name="question20" value="playing" className="mr-2" />
                        <label>Playing</label>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        If you could choose a dream job, which would it be?
                    </label>
                    <select name="question21" className="block w-full bg-gray-200 border border-gray-200 p-2 rounded">
                        <option value="">Select a role</option>
                        <option value="account_manager">Account Manager</option>
                        <option value="accountant">Accountant</option>
                        <option value="actor_actress">Actor/Actress</option>
                        <option value="administrator">Administrator</option>
                        <option value="advertising_executive">Advertising Executive</option>
                        <option value="architect">Architect</option>
                        <option value="beauty_therapist">Beauty Therapist</option>
                        <option value="carpenter">Carpenter</option>
                        <option value="chef">Chef</option>
                        <option value="copywriter">Copywriter</option>
                        <option value="customer_service_representative">Customer Service Representative</option>
                        <option value="data_analyst">Data Analyst</option>
                        <option value="doctor">Doctor</option>
                        <option value="electrician">Electrician</option>
                        <option value="engineer">Engineer</option>
                        <option value="event_planner">Event Planner</option>
                        <option value="fashion_designer">Fashion Designer</option>
                        <option value="financial_advisor">Financial Advisor</option>
                        <option value="fitness_instructor_personal_trainer">Fitness Instructor/Personal Trainer</option>
                        <option value="freelance_photographer">Freelance Photographer</option>
                        <option value="graphic_designer">Graphic Designer</option>
                        <option value="hairdresser_barber">Hairdresser/Barber</option>
                        <option value="human_resources_manager">Human Resources Manager</option>
                        <option value="influencer">Influencer</option>
                        <option value="interior_designer">Interior Designer</option>
                        <option value="it_specialist_software_developer">IT Specialist/Software Developer</option>
                        <option value="journalist">Journalist</option>
                        <option value="journalist_blogger">Journalist/Blogger</option>
                        <option value="landscaper_gardener">Landscaper/Gardener</option>
                        <option value="lawyer">Lawyer</option>
                        <option value="makeup_artist">Makeup Artist</option>
                        <option value="marketing_manager">Marketing Manager</option>
                        <option value="mechanic">Mechanic</option>
                        <option value="musician">Musician</option>
                        <option value="nurse">Nurse</option>
                        <option value="plumber">Plumber</option>
                        <option value="police_officer">Police Officer</option>
                        <option value="real_estate_agent">Real Estate Agent</option>
                        <option value="retail_sales_associate">Retail Sales Associate</option>
                        <option value="self_employed">Self-Employed</option>
                        <option value="social_media_manager">Social Media Manager</option>
                        <option value="teacher">Teacher</option>
                        <option value="translator_interpreter">Translator/Interpreter</option>
                        <option value="veterinarian">Veterinarian</option>
                        <option value="warehouse_worker">Warehouse Worker</option>
                        <option value="web_developer">Web Developer</option>
                        <option value="wedding_planner">Wedding Planner</option>
                        <option value="writer_author">Writer/Author</option>
                        <option value="youtuber">YouTuber</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block font-bold mb-2">
                        What is your current role?
                    </label>
                    <select name='question22' value={role} onChange={handleRoleChange} className="block w-full bg-gray-200 border border-gray-200 p-2 rounded">
                        <option value="">Select a role</option>
                        <option value="Back-end Developer">Back-end Developer</option>
                        <option value="Branch Manager">Branch Manager</option>
                        <option value="Business Analyst">Business Analyst</option>
                        <option value="Compliance Officer">Compliance Officer</option>
                        <option value="Credit Analyst">Credit Analyst</option>
                        <option value="Customer Experience Manager">Customer Experience Manager</option>
                        <option value="Customer Service Advisor">Customer Service Advisor</option>
                        <option value="Data Analyst">Data Analyst</option>
                        <option value="Financial Advisor">Financial Advisor</option>
                        <option value="Fraud Analyst">Fraud Analyst</option>
                        <option value="Front-end Developer">Front-end Developer</option>
                        <option value="HR Business Partner">HR Business Partner</option>
                        <option value="IT Specialist">IT Specialist</option>
                        <option value="Mainframe Architect">Mainframe Architect</option>
                        <option value="Marketing Manager">Marketing Manager</option>
                        <option value="Mortgage Advisor">Mortgage Advisor</option>
                        <option value="Operations Manager">Operations Manager</option>
                        <option value="Personal Banker">Personal Banker</option>
                        <option value="Project Manager">Project Manager</option>
                        <option value="Quality Engineer">Quality Engineer</option>
                        <option value="Relationship Manager">Relationship Manager</option>
                        <option value="Risk Analyst">Risk Analyst</option>
                        <option value="Software Engineer">Software Engineer</option>
                        <option value="Underwriter">Underwriter</option>
                        <option value="Wealth Manager">Wealth Manager</option>
                        <option value="Other">Other</option>
                    </select>
                    {role === 'Other' && (
                        <input
                            type="text"
                            placeholder="Please specify your role"
                            value={otherRole}
                            onChange={handleOtherRoleChange}
                            className="block w-full bg-gray-200 border border-gray-200 p-2 rounded mt-2"
                        />
                    )}





                </div>


                <div className="mt-8">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Employee;
