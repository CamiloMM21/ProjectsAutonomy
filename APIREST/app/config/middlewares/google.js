import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import dot from "../enviroments"
const emails = ["jcmunoz982@misena.edu.co"]

passport.use(
    "auth-google",
    new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google"
  },
  function(accessToken, refreshToken, profile, cb) {
    const response = emails.includes(profile.emails[0].value)
    if( response){
        cb(null, profile);

    }else{
        //guardar base de datos
        emails.push(profile.emails[0].value);
        cb(null, profile);
    }
  }
));