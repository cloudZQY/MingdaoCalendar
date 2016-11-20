let auth = require('./auth');
let formatEvents = require('./events').formatEvents;
let datetime = require('../../utils/datetime');

class Calendar extends auth {

    static GetCalendarList(beginDate, endDate, account_ids, category, callback) {
        let url = 'https://api.mingdao.com/v1/calendar/get_events_by_conditions';
        let method = 'GET';
        let data = {
            account_ids: account_ids,
            event_category_types: 21,
            begin_date: beginDate,
            end_date: endDate,
            category_ids: category
        }
        super.RequestApi(url, method, data, (response) => {
            let events = formatEvents(response.data)
            callback(events);
        });
    }

    static GetUserCategory(callback) {
        let url = 'https://api.mingdao.com/v1/calendar/get_all_user_defined_categories';
        let method = 'GET';
        let data = {};
        super.RequestApi(url, method, data, (reponse) => {
            callback(reponse.data);
        });
    }

    static confirmEvent(eventid, callback) {
        let url = 'https://api.mingdao.com/v1/calendar/confirm_event_invitation';
        let method = 'POST';
        let recuring = '';
        let indexOf_ = eventid.indexOf('_')
        if (indexOf_ > -1) {
            recuring = datetime.toDateFormat(eventid.substr(indexOf_ + 1));
            eventid = eventid.substr(0, indexOf_);
        }

        let data = {
            event_id: eventid,
            event_recurring_time: recuring
        };        
        super.RequestApi(url, method, data, (reponse) => {
            callback(reponse.success);
        });
    }

    static rejectEvent(eventid, callback) {
        let url = 'https://api.mingdao.com/v1/calendar/reject_event_invitation';
        let method = 'POST';
        let recuring = '';
        let indexOf_ = eventid.indexOf('_')
        if (indexOf_ > -1) {
            recuring = datetime.toDateFormat(eventid.substr(indexOf_ + 1));
            eventid = eventid.substr(0, indexOf_);
        }

        let data = {
            event_id: eventid,
            event_recurring_time: recuring,
            reason_for_rejecting: ''
        };
        super.RequestApi(url, method, data, (reponse) => {
            callback(reponse.success);
        });
    }


    static GetUnConfirmCalendars(callback) {
        let url = 'https://api.mingdao.com/v1/calendar/get_unconfirmed_events';
        let method = 'GET';
        let data = {};

        super.RequestApi(url, method, data, (response) => {
            let events = formatEvents(response.data)
            callback(events);
        });


    }



}






module.exports = Calendar;