import React from 'react'

const SubmitReview = () => {
  return (
      <div>
    <div>Submit Your Review</div>
        <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder='Submit Your Quiz Review'>
  </textarea>
  <br></br>
  <form action="#" class="inline">
    <button class="float-left submit-button">Submit</button>
</form>
    </div>
  )
}

export default SubmitReview