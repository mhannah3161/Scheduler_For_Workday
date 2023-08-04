// GLOBAL VARS
// reference the whole task (time and textarea)
var timeBlockEl = document.querySelector('.container');

// This wil show current date on id of "currentDay"
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

// Event listener for saveBtn click
$('.saveBtn').on('click', function () {
  // get nearby values of the description in jQuery
  var textValue = $(this).siblings('.description').val();
  // get the id attribute of the parent div element
  var timeKey = $(this).parent().attr('id');

  // save in local storage
  localStorage.setItem(timeKey, textValue);
});

// This will get items from local storage. 
$('#hour8 .description').val(localStorage.getItem('8'));
$('#hour9 .description').val(localStorage.getItem('9'));
$('#hour10 .description').val(localStorage.getItem('10'));
$('#hour11 .description').val(localStorage.getItem('11'));
$('#hour12 .description').val(localStorage.getItem('12'));
$('#hour13 .description').val(localStorage.getItem('13'));
$('#hour14 .description').val(localStorage.getItem('14'));
$('#hour15 .description').val(localStorage.getItem('15'));
$('#hour16 .description').val(localStorage.getItem('16'));
$('#hour17 .description').val(localStorage.getItem('17'));

// This function tracks tasks making the tasks change their color if they are past, present or future
function taskTracker() {
  // get hours of current day (24hrs)
  var currentHour = today.hours();

  // this will loop over each block of time
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