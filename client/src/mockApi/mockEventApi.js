import delay from './delay';

const events = [
    {
        "_id": "5a73cfafc957671faca8b5ba",
        "title": "Game day",
        "body": "bring your game on",
        "__v": 0,
        "dateCreated": "2018-02-02T02:38:58.605Z",
        "isAnnounced": true
    },
    {
        "_id": "5a75d4fc6f6dff3eccde8418",
        "title": "Super Bowl Sunday",
        "body": "Meet up at the Church",
        "__v": 0,
        "dateCreated": "2018-02-03T15:26:17.556Z",
        "isAnnounced": true
    },
    {
        "_id": "5a75d97c17d50d12506c6a3b",
        "title": "Men Meet up",
        "body": "Talk about men stuff",
        "author": "Jerick Bilalat",
        "authorRole": "Chairman",
        "__v": 0,
        "dateCreated": "2018-02-03T15:45:46.205Z",
        "isAnnounced": true
    },
    {
        "_id": "5a75da1451c6501c8833c8e7",
        "title": "Pot luck",
        "body": "Bring food and share",
        "author": "Jerick Bilalat",
        "authorRole": "Chairman",
        "__v": 0,
        "dateCreated": "2018-02-03T15:48:37.016Z",
        "isAnnounced": true
    },
    {
        "_id": "5a770e3a676bd745f03644ed",
        "title": "gameday2",
        "body": "let's go",
        "author": "Jerick Bilalat",
        "authorRole": "Chairman",
        "__v": 0,
        "dateCreated": "2018-02-04T13:43:14.324Z",
        "isAnnounced": true
    },
    {
        "_id": "5a770ec20ec74e3fb43763d1",
        "title": "gdfgfdgfd",
        "body": "dfgfdgdfgdfgdf",
        "author": "Jerick Bilalat",
        "authorRole": "Chairman",
        "__v": 0,
        "dateCreated": "2018-02-04T13:46:17.211Z",
        "isAnnounced": true
    },
    {
        "_id": "5a77163e709ac839fcd13c01",
        "title": "sdasdsdas",
        "body": "sadasdasdas",
        "author": "Jerick Bilalat",
        "authorRole": "Chairman",
        "__v": 0,
        "dateCreated": "2018-02-04T14:10:53.147Z",
        "isAnnounced": true
    },
    {
        "_id": "5a771ab536c3ca1258e2e479",
        "title": "Yes Finally Rendered",
        "body": "We learned Redux flow and how is it connected to redux and wallah",
        "author": "Jerick Bilalat",
        "authorRole": "Chairman",
        "__v": 0,
        "dateCreated": "2018-02-04T14:36:13.552Z",
        "isAnnounced": true
    },
    {
        "_id": "5a773510e4d60444a4d09d41",
        "title": "more testting",
        "body": "probably not the last one",
        "author": "Jerick Bilalat",
        "authorRole": "Chairman",
        "__v": 0,
        "dateCreated": "2018-02-04T16:29:38.129Z",
        "isAnnounced": true
    }
];

class EventApi{
    static fetchEvents() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], events));
              }, delay);
        })
    }
}

export default EventApi;