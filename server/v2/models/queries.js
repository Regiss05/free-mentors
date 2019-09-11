export const systemAdminDB = `CREATE TABLE public.users ( 
    userid serial PRIMARY KEY,
    email varchar(50) unique,
    firstName varchar(30),
    lastLame varchar(30), 
    password text,  
    isAdmin boolean,
    isMentor boolean,
    token text
    );

    CREATE TABLE  reqSession (
        sessionId serial PRIMARY KEY,
        mentorId varchar(50),
        menteeId varchar(50),
        questions varchar(50),
        menteeEmail varchar(50) unique,
        status varchar(50)
    );

    CREATE TABLE mentor (
        mentorId serial PRIMARY KEY,
        firstName varchar(50),
        lastName varchar(50),
        email varchar(50) unique,
        password varchar(50),
        address varchar(50),
        bio varchar(50),
        occupation varchar(50),
        expertise varchar(50),
        userid integer,

        CONSTRAINT user_fk FOREIGN KEY (userid)
        REFERENCES public.users (userid) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
    );
    `

    export const getSignupQuery = values => ({
        text: 'INSERT INTO users (token,email,firstName, lastName, password, isAdmin, isMentor) values($1,$2,$3,$4,$5,$6,$7) RETURNING id',
        values,
    });

    export const getSigninQuery = values => ({
        text: 'SELECT * from users where email = $1',
        values,
    });

    export const getMentorQuery = values => ({
        text: 'select * from mentor',
        values,
    });

    export const getSpecificMentorQuery = values => ({
        text: 'select * from mentor where id = $1',
        values,
    });

    export const isadminQuery = values => ({
        text: 'select isadmin from users where email = $1 and isadmin=true',
        values,
    });

    export const isspecificmentorQuery = values => ({
        text: 'select ismentor from users where email = $1 and ismentor=true',
        values,
    });

    export const ismentorQuery = values => ({
        text: 'select * reqsession',
        values,
    });

    export const mentorRequestAcceptQuery = values => ({
        text: 'update reqSession set status = \'accepted\' where sessionid = $1 and mentorid = $2',
        values,
    });
    export const mentorRequestDenyQuery = values => ({
        text: 'update reqSession set status = \'rejected\' where sessionid = $1 and mentorid = $2',
        values,
    });

    export const adminchangeQuery = values => ({
        text: 'update users set ismentor = \'true\' where email = $1 returning',
        values,
    });

    export const setUserTokenQuery = values => ({
        text: 'update users set token=$1 where email=$2',
        values,
      });
