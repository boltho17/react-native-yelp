import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer QM9-CjU6V9nVU1XpOailK1fg3Y_AfKrJq_8JGB9OfFz4Ww1-awoFjnP0ZQKyeLfZ2GorGOfhtfVaKqdHVrOW6bWHC-QvWjGuZpAs_lSfqr4dQzw8yXlNUk75FcjvXnYx'
    }
});
