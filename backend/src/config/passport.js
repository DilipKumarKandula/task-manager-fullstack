const passport = require("passport");

const db = require("../config/db");

const GoogleStrategy = require(
  "passport-google-oauth20"
).Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        process.env.GOOGLE_CLIENT_ID,

      clientSecret:
        process.env
          .GOOGLE_CLIENT_SECRET,

      callbackURL:
        "/auth/google/callback",
    },

    async (
      accessToken,
      refreshToken,
      profile,
      done
    ) => {
      try {
        const googleId =
          profile.id;

        const email =
          profile.emails[0].value;

        const name =
          profile.displayName;

        const existingUser =
          await db.query(
            `
            SELECT * FROM users
            WHERE google_id = $1
            `,
            [googleId]
          );

        let user;

        if (
          existingUser.rows.length > 0
        ) {
          user =
            existingUser.rows[0];
        } else {
          const newUser =
            await db.query(
              `
              INSERT INTO users
              (
                google_id,
                email,
                name
              )
              VALUES ($1, $2, $3)
              RETURNING *
              `,
              [
                googleId,
                email,
                name,
              ]
            );

          user =
            newUser.rows[0];
        }

        done(null, user);
      } catch (error) {
        done(error, null);
      }
    }
  )
);

passport.serializeUser(
  (user, done) => {
    done(null, user);
  }
);

passport.deserializeUser(
  (user, done) => {
    done(null, user);
  }
);

module.exports = passport;