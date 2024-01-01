function save() {
    var username_str = document.getElementById('username').value;
    var password_str = document.getElementById('password').value;

    var email = document.getElementById('email').value;
    var emailRegex = /^\S+@\S+\.\S+$/;

    var age = document.getElementById('age').value;
    var agree = document.getElementById('agree').checked;
    var gender = document.querySelector('input[name="gender"]:checked');




    if (username_str.trim() === '') {
        alert('Username cannot be empty');
    } else if (password_str.length < 8) {
        alert('Password must be at least 8 characters long');
    } else if (password_str.trim() === '') {
        alert('Password cannot be empty');
    } else if (!emailRegex.test(email)) {
        alert('Enter a valid email address');
    } else if (isNaN(age) || age < 0) {
        alert('Enter a valid age');
    } else if (!agree) {
        alert('You must agree to the terms and conditions');
    } else if (!gender) {
        alert('Please select a gender');
    } else {
        alert("Saved successfully")
    }

}

function cancel() {
    var username_str = document.getElementById('username').value;
    var password_str = document.getElementById('password').value;

    if (username_str.trim() !== '' || password_str.trim() !== '') {
        if (confirm("Are you sure you want to cancel?")) {
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    }
}

function validateUsername() {
    var username_str = document.getElementById('usernamestr').value;
    var errorSpan_username_str = document.getElementById('usernameErrorStr');


    if (username_str.length === 0) {
        errorSpan_username_str.innerHTML = 'Username is required.';
    } else {
        errorSpan_username_str.innerHTML = '';
    }
}




function saveNew() {


    var username1 = document.getElementById('username1').value;
    var errorSpanusername = document.getElementById('usernameError');

    var password1 = document.getElementById('password1').value;
    var errorSpanpassword = document.getElementById('passwordError');

    var email1 = document.getElementById('email1').value;
    var errorSpanemail = document.getElementById('emailError');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var agreeCheckbox = document.getElementById('agree');
    var errorSpanagreecheckbox = document.getElementById('checkboxError');

    var maleRadio = document.getElementById('male');
    var femaleRadio = document.getElementById('female');
    var errorSpangender = document.getElementById('genderError');

    var countrySelect = document.getElementById('country');
    var errorSpancountry = document.getElementById('countryError');

    var message = document.getElementById('message').value;
    var errorSpanmessage = document.getElementById('messageError');

    var quantity = document.getElementById('quantity').value;
    var errorSpanquantity = document.getElementById('quantityError');

    var dob = document.getElementById('dob').value;
    var errorSpandob = document.getElementById('dobError');

    var fileInput = document.getElementById('upload');
    var errorSpanfileinput = document.getElementById('fileError');


    var website = document.getElementById('website').value;
    var errorSpanwebsite = document.getElementById('websiteError');
    var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;


    var phoneNumber = document.getElementById('phoneNumber').value;
    var errorSpanphonenumber = document.getElementById('phoneError');

    // You can customize the regex based on the expected format
    var phoneRegex = /^\d{10}$/;


    var colorInput = document.getElementById('favColor');
    var errorSpancolorinput = document.getElementById('colorError');

    var rangeValue = document.getElementById('slider').value;
    var errorSpanrangevalue = document.getElementById('rangeError');

    var eventTime = document.getElementById('eventTime').value;
    var errorSpaneventtime = document.getElementById('timeError');


    var selectedColors = document.getElementById('colors').selectedOptions;
    var errorSpanselectedcolors = document.getElementById('colorsError');

    var expiryMonth = document.getElementById('expiryMonth').value;
    var errorSpanexpirymonth = document.getElementById('expiryMonthError');


    var scheduleWeek = document.getElementById('scheduleWeek').value;
    var errorSpanscheduleweek = document.getElementById('scheduleWeekError');

    var searchQuery = document.getElementById('searchQuery').value;
    var errorSpansearchquery = document.getElementById('searchError');

    var eventDateTime = document.getElementById('eventDateTime').value;
    var errorSpaneventdatetime = document.getElementById('dateTimeError');

    var passwordStrength = document.getElementById('strengthMeter').value;
    var errorSpanpasswordstrength = document.getElementById('strengthError');


    var uploadProgress = document.getElementById('uploadProgress').value;
    var errorSpanuploadprogress = document.getElementById('progressError');


    //  var hiddenPassword = document.getElementById('hiddenPassword').value;
    //  var errorSpan = document.getElementById('hiddenPasswordError');


    var imageInput = document.getElementById('imageUpload');
    var errorSpanimageinput = document.getElementById('imageError');


    var amount = document.getElementById('amount').value;
    var errorSpanamount = document.getElementById('currencyError');

    var textareaValue = document.getElementById('limitedText').value;
    var errorSpantextareavalue = document.getElementById('textLimitError');
    var maxLimit = 100;

    var inputValue = document.getElementById('customPattern').value;
    var errorSpaninputvalue = document.getElementById('patternError');

    // You can customize the regex pattern based on your requirements
    var customRegex = /^[A-Za-z]{3}$/;


    var backgroundColor = document.getElementById('backgroundColor').value;
    var foregroundColor = document.getElementById('foregroundColor').value;
    var errorSpanforeandbackgoundcolor = document.getElementById('contrastError');

    // You can use a color contrast algorithm to determine if the contrast is sufficient
    // For simplicity, this example assumes that a color difference of 128 is acceptable
    var colorDiff = Math.abs(parseInt(backgroundColor, 16) - parseInt(foregroundColor, 16));


    var ipAddress = document.getElementById('ipAddress').value;
    var errorSpanipaddress = document.getElementById('ipAddressError');

    // You can use a regular expression to validate an IP address
    var ipRegex = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;


    var isbn = document.getElementById('isbn').value;
    var errorSpanisbn = document.getElementById('isbnError');

    // You can use a regular expression to validate an ISBN (ISBN-10 or ISBN-13)
    var isbnRegex = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;


    var creditCard = document.getElementById('creditCard').value;
    var errorSpancreditcard = document.getElementById('creditCardError');

    // You can use the Luhn algorithm to validate credit card numbers
    var luhnCheck = function (num) {
        var arr = (num + '').split('').reverse().map(function (x) {
            return parseInt(x, 10);
        });
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            if (i % 2 === 1) {
                arr[i] *= 2;
                if (arr[i] > 9) {
                    arr[i] -= 9;
                }
            }
            sum += arr[i];
        }
        return sum % 10 === 0;
    };



    var rangeValue = document.getElementById('customRange').value;
    var rangeLabel = document.getElementById('rangeLabel');



















    if (username1.length === 0) {
        errorSpanusername.innerHTML = 'Username is required.';
    } else {
        errorSpanusername.innerHTML = '';
    }

    if (password1.length < 8) {
        errorSpanpassword.innerHTML = 'Password must be at least 8 characters long.';
    } else {
        errorSpanpassword.innerHTML = '';
    }

    if (!emailRegex.test(email1)) {
        errorSpanemail.innerHTML = 'Enter a valid email address.';
    } else {
        errorSpanemail.innerHTML = '';
    }

    if (!agreeCheckbox.checked) {
        errorSpanagreecheckbox.innerHTML = 'You must agree to the terms.';
    } else {
        errorSpanagreecheckbox.innerHTML = '';
    }

    if (!maleRadio.checked && !femaleRadio.checked) {
        errorSpangender.innerHTML = 'Please select a gender.';
    } else {
        errorSpangender.innerHTML = '';
    }

    if (countrySelect.value === '') {
        errorSpancountry.innerHTML = 'Please select a country.';
    } else {
        errorSpancountry.innerHTML = '';
    }

    if (message.trim().length === 0) {
        errorSpanmessage.innerHTML = 'Message cannot be empty.';
    } else {
        errorSpanmessage.innerHTML = '';
    }

    if (isNaN(quantity) || quantity <= 0) {
        errorSpanquantity.innerHTML = 'Please enter a valid positive number.';
    } else {
        errorSpanquantity.innerHTML = '';
    }

    // Perform additional date validation if needed
    if (!dob) {
        errorSpandob.innerHTML = 'Date of birth is required.';
    } else {
        errorSpandob.innerHTML = '';
    }


    if (fileInput.files.length === 0) {
        errorSpanfileinput.innerHTML = 'Please choose a file for upload.';
    } else {
        errorSpanfileinput.innerHTML = '';
    }


    if (!urlRegex.test(website)) {
        errorSpanwebsite.innerHTML = 'Enter a valid URL.';
    } else {
        errorSpanwebsite.innerHTML = '';
    }

    if (!phoneRegex.test(phoneNumber)) {
        errorSpanphonenumber.innerHTML = 'Enter a valid 10-digit phone number.';
    } else {
        errorSpanphonenumber.innerHTML = '';
    }

    // You can perform additional validation based on your requirements
    if (!colorInput.value) {
        errorSpancolorinput.innerHTML = 'Please choose a color.';
    } else {
        errorSpancolorinput.innerHTML = '';
    }

    // You can set specific range limits and display an error if needed
    if (rangeValue < 20 || rangeValue > 80) {
        errorSpanrangevalue.innerHTML = 'Value must be between 20 and 80.';
    } else {
        errorSpanrangevalue.innerHTML = '';
    }


    // You can perform additional time validation if needed
    if (!eventTime) {
        errorSpaneventtime.innerHTML = 'Please enter a valid time.';
    } else {
        errorSpaneventtime.innerHTML = '';
    }

    if (selectedColors.length === 0) {
        errorSpanselectedcolors.innerHTML = 'Please select at least one color.';
    } else {
        errorSpanselectedcolors.innerHTML = '';
    }


    // You can perform additional validation based on your requirements
    if (!expiryMonth) {
        errorSpanexpirymonth.innerHTML = 'Please enter a valid expiry month.';
    } else {
        errorSpanexpirymonth.innerHTML = '';
    }


    // You can perform additional validation based on your requirements
    if (!scheduleWeek) {
        errorSpanscheduleweek.innerHTML = 'Please enter a valid week.';
    } else {
        errorSpanscheduleweek.innerHTML = '';
    }


    // You can perform additional search query validation if needed
    if (searchQuery.trim().length === 0) {
        errorSpansearchquery.innerHTML = 'Please enter a search query.';
    } else {
        errorSpansearchquery.innerHTML = '';
    }


    // You can perform additional datetime validation if needed
    if (!eventDateTime) {
        errorSpaneventdatetime.innerHTML = 'Please enter a valid date and time.';
    } else {
        errorSpaneventdatetime.innerHTML = '';
    }


    // You can customize the strength criteria based on your requirements
    if (passwordStrength < 5) {
        errorSpanpasswordstrength.innerHTML = 'Password strength is too weak.';
    } else {
        errorSpanpasswordstrength.innerHTML = '';
    }


    // You can customize the progress criteria based on your requirements
    if (uploadProgress < 50) {
        errorSpanuploadprogress.innerHTML = 'Upload progress is too low.';
    } else {
        errorSpanuploadprogress.innerHTML = '';
    }




    // You can perform additional validation based on your requirements
    //  if (hiddenPassword.length < 8) {
    //      errorSpan.innerHTML = 'Password must be at least 8 characters long.';
    //  } else {
    //      errorSpan.innerHTML = '';
    //  }



    if (imageInput.files.length === 0) {
        errorSpanimageinput.innerHTML = 'Please choose an image for upload.';
    } else {
        // You can perform additional checks on the image file if needed
        errorSpanimageinput.innerHTML = '';
    }


    // You can perform additional validation for currency input
    if (isNaN(amount) || amount <= 0) {
        errorSpanamount.innerHTML = 'Please enter a valid positive amount.';
    } else {
        errorSpanamount.innerHTML = '';
    }


    if (textareaValue.length > maxLimit) {
        errorSpantextareavalue.innerHTML = 'Text exceeds the maximum limit of ' + maxLimit + ' characters.';
    } else {
        errorSpantextareavalue.innerHTML = '';
    }



    if (!customRegex.test(inputValue)) {
        errorSpaninputvalue.innerHTML = 'Please enter three alphabetical characters.';
    } else {
        errorSpaninputvalue.innerHTML = '';
    }




    if (colorDiff < 128) {
        errorSpanforeandbackgoundcolor.innerHTML = 'Ensure sufficient color contrast for readability.';
    } else {
        errorSpanforeandbackgoundcolor.innerHTML = '';
    }


    if (!ipRegex.test(ipAddress)) {
        errorSpanipaddress.innerHTML = 'Enter a valid IP address.';
    } else {
        errorSpanipaddress.innerHTML = '';
    }



    if (!isbnRegex.test(isbn)) {
        errorSpanisbn.innerHTML = 'Enter a valid ISBN.';
    } else {
        errorSpanisbn.innerHTML = '';
    }




    if (!luhnCheck(creditCard)) {
        errorSpancreditcard.innerHTML = 'Enter a valid credit card number.';
    } else {
        errorSpancreditcard.innerHTML = '';
    }




    rangeLabel.innerHTML = rangeValue;



}


function cancelNew() {
    var username_str = document.getElementById('username').value;
    var password_str = document.getElementById('password').value;

    if (username_str.trim() !== '' || password_str.trim() !== '') {
        if (confirm("Are you sure you want to cancel?")) {
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    }
}


function displayImage() {
    const input = document.getElementById("imageone");
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const imageDataUrl = event.target.result;
            updateImageSrc(imageDataUrl);
        };
        reader.onerror = function (error) {
            console.error("Error reading the file:", error);
        };
        reader.readAsDataURL(file);
    }
}


function openFileExplorer() {
    var fileInput = document.getElementById('fileInput');
    fileInput.click();
}

function displaySelectedImage(input) {
    var imageElement = document.getElementById('displayedImage');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // Set the source of the image
            imageElement.src = e.target.result;

            // Display the image
            imageElement.style.display = 'block';
        };

        // Read the selected image as a data URL
        reader.readAsDataURL(input.files[0]);
    }

}

