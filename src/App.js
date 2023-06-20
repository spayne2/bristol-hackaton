import React from 'react';
import axios from 'axios';

const App = () => {
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

  return (
    <div className="flex flex-col justify-center items-center h-screen">

      <div className='flex justify-center text-3xl text-black shadow-xl p-4 px-8 m-4 mx-20 max-w-fit rounded-full bg-gray-200'>
        Hackathon
      </div>

      <form className="w-1/2 p-6 bg-gray-100 shadow-md rounded-md" onSubmit={submitForm}>
        <div className="mb-4">
          <label htmlFor="question1" className="block font-bold mb-2">
            what do you like?
          </label>
          <input
            type="text"
            id="question1"
            name="question1"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Answer to Question 1"
          />
        </div>

        {/* Add more input fields for each question */}
        {/* Example: */}
        <div className="mb-4">
          <label htmlFor="question2" className="block font-bold mb-2">
            Question 2
          </label>
          <input
            type="text"
            id="question2"
            name="question2"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Answer to Question 2"
          />
        </div>


        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
