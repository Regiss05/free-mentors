export const systemAdminDB = `CREATE TABLE public.users ( 
    userid serial PRIMARY KEY,
    email varchar(50) unique,
    firstname varchar(30),
    lastname varchar(30), 
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
        bio varchar(50),
        occupation varchar(50),
        expertise varchar(50),
        userid integer unique,

        CONSTRAINT user_fk FOREIGN KEY (userid)
        REFERENCES public.users (userid) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
    );
    `

    export const getSignupQuery = values => ({
        text: 'INSERT INTO users (token,email,firstName, lastName, password, isAdmin, isMentor) values($1,$2,$3,$4,$5,$6,$7) RETURNING *',
        values,
    });

    export const getSigninQuery = values => ({
        text: 'SELECT * from users where email = $1',
        values,
    });

    export const getMentorQuery = values => ({
        text: 'select * from mentor, users where users.userid = mentor.userid',
        values,
    });

    export const getSpecificMentorQuery = values => ({
        text: 'select * from mentor, users where mentorid = $1 and users.userid = mentor.userid',
        values,
    });

    export const isadminQuery = values => ({
        text: 'select isadmin from users where email = $1 and isadmin=true',
        values,
    });

    export const specificmentorQuery = values => ({
        text: 'select * from users, mentor where mentorid = $1 ',
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

    export const setMentorQuery = values => ({
        text: 'update users set ismentor = true where userid=$1 returning *',
        values,
    });

    export const addMentorQuery = values => ({
        text: 'insert into mentor (bio, occupation, expertise, userid) values ($1, $2, $3, $4) returning *',
        values,
    })

    export const setUserTokenQuery = values => ({
        text: 'update users set token=$1 where email=$2',
        values,
      });

    export const addSession  =  values => ({
        text:  'insert into reqsession (mentorid, menteeemail, questions, status) values($1, $2, $3, $4) returning * ',
        values,
    });
    export const updateSession = values => ({
        text: 'update reqsession set status = $1 where sessionid =$2 returning *',
        values,
    })
    export const getCurrentSession = values => ({
        text: 'select * from reqsession where menteeemail = $1',
        values,
    });
    export const deleteTestUser = values => ({
        text: 'delete from users where email = \'goodPass@gmail.com\'',
        values,
    });
    export const deleteSessions = values => ({
        text: 'delete from reqsession where menteeemail = \'goodPass@gmail.com\'',
        values,
    });
      
