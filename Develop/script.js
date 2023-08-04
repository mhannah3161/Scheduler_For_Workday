// // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// // the code isn't run until the browser has finished rendering all the elements
// // in the html.




// var today = dayjs();
// $('#currentDay').text(today.format('MMM D, YYYY'));

// $(function (event) {
//   // TODO: Add a listener for click events on the save button. This code should
//   // use the id in the containing time-block as a key to save the user input in
//   // local storage. HINT: What does `this` reference in the click listener
//   // function? How can DOM traversal be used to get the "hour-x" id of the
//   // time-block containing the button that was clicked? How might the id be
//   // useful when saving the description in local storage?
//   $(".saveBtn").on("click", function (event) {
//     var calendarItem = event.target.parentElement.previousElementSibling.children[0].value;
//     localStorage.setItem(event.target.attributes[0].value, calendarItem);
// });

//   // TODO: Add code to apply the past, present, or future class to each time
//   // block by comparing the id to the current hour. HINTS: How can the id
//   // attribute of each time-block be used to conditionally add or remove the
//   // past, present, and future classes? How can Day.js be used to get the
//   // current hour in 24-hour time?
//   var hour = dayjs().hour();
//   var time = document.querySelector('div.id')
//   if (hour == time){
//     $(this).addClass("present");
//   } else if (hour < time) {
//     $(this).removeClass("present");
//     $(this).addClass("future");
//   } else if (hour > time) {
//     $(this).removeClass("future");
//     $(this).addClass("past");
//   }
//   }

//   // TODO: Add code to get any user input that was saved in localStorage and set
//   // the values of the corresponding textarea elements. HINT: How can the id
//   // attribute of each time-block be used to do this?
//   //
//   // TODO: Add code to display the current date in the header of the page.
// );
// GLOBAL VARIABLES
// Reference moment.js
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
var today = moment();
// reference the whole task (time and textarea)
var timeBlockEl = document.querySelector('.container');

// REFERENCES
// Display the current date and time on the paragraph with an id of "currentDay"
$('#currentDay').text(today.format('LLLL')); // LLLL shows day of the week, date and time

// EVENT LISTENER
// Event listener for saveBtn click
$('.saveBtn').on('click', function () {
  // get nearby values of the description in jQuery
  var textValue = $(this).siblings('.description').val();
  // get the id attribute of the parent div element
  var timeKey = $(this).parent().attr('id');

  // save in local storage
  localStorage.setItem(timeKey, textValue);
});

// Get item from local storage if any
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));

// Function to track tasks and make them change colors if they are in the past, present or future
function taskTracker() {
  // get current number of hours
  var currentHour = today.hours();

  // loop over each time block
  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour")[1]);

    // if the time Id attribute is before the current hour, add the past class
    if (timeId < currentHour) {
      $(this).addClass('past');
    } // if the time Id attribute is equal to the current hour, remove the past and future classes and add the present class
    else if (timeId === currentHour) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } // If the time Id attribute is greater than the current time, remove the past and present classes and add the future class
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

// Call the audit task function
taskTracker();

// Use setTimeout to update the time every minute (1000ms * 60s)
setTimeout(function () {
  // clear the current URL
  location = ''; // location references the current URL
}, 1000 * 60);