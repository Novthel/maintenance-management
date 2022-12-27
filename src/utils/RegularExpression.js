
export const er = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^\d{7,14}$/,    // Validate that it has 7 to 14 numbers.
    password: /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,    // password must have one lowercase letter, one uppercase letter, one number, one special character, and at least 8 digits.
    text: /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/,    // validates a string of only lowercase letters, uppercase letters, includes accents but includes spaces.
    user: /^[a-z0-9_-]{3,24}$/,   // lowercase letters, numbers, underscore, and hyphen. Usernames must be between 3 and 24 characters.
}


