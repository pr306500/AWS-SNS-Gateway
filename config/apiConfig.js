/* jshint node: true */
/* jshint esnext: true */
'use strict';
module.exports = {
    "app_port" : 3333,
    "socket_port" : 5555,
    "default_success_http_code" : 200,
    "default_error_http_code" : 200,
    "process_error_http_code" : 200,
    "service_error_http_code" : 200,
    "default_success_code" : 0,
    "default_error_code" : 7,
    "default_session_expiry_code" : 9,
    "default_success_message" : "Successfully processed the request",
    "default_error_message" : "Sorry, invalid request",
    "process_error_message" : "Error encountered processing the request",
    "params_error_message" : "Please make sure you are passing valid parameters",
    "unauthorized_view_message" : "You are not authorized to view the information",
    "unauthorized_operation_message" : "You are not authorized to perform this operation",
    "unauthorized_access_message" : "You are not authorized to access",
    "service_down_message" : "Oops, something went wrong, please try again later",
    "session_expired_message" : "Sorry, looks like you are not logged in",
    "session_logout_message" : "Successfully logged out",
    "session_logout_devices_message" : "Successfully logged out from all the devices",
    "checkIntegerValue" : /^\d+$/,
    "emailPattern" : /[\w-]+@([\w-]+\.)+[\w-]+/,
    "urlPattern"   : "(http|https)://[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:/~+#-]*[\w@?^=%&amp;/~+#-])?",
    "folderPathPattern" : /([^\/]*)\/*$/,
    "dateFormatPattern" : /^\d{4}-\d{2}-\d{2}$/,
    "microsoftSubscriptionSalt" : "cLIENTsTATEfORvALIDATION",
    "validMailServer" : ["Microsoft","Google"],
    "validMailBoxType" : ["Inbox", "Outbox", "Sent Items", "Drafts", "Archive", "Junk Email", "Deleted Items"],
    "validMailFields" : ["Id", "CreatedDateTime", "LastModifiedDateTime", "ChangeKey", "Categories", "ReceivedDateTime", "SentDateTime", "HasAttachments", "InternetMessageId", "Subject", "BodyPreview", "Importance", "ParentFolderId", "ConversationId", "IsDeliveryReceiptRequested", "IsReadReceiptRequested", "IsRead", "IsDraft", "WebLink", "InferenceClassification", "Body", "ContentType", "Content", "Sender", "EmailAddress", "Name", "From", "ToRecipients", "CcRecipients", "BccRecipients", "ReplyTo"],
    "validFilterFields" : ["isRead", "startDateTime","subject", "endDateTime", "importance"],
    "validFilterCriteria" : ["eq", "ne", "gt", "ge", "lt", "le"],
    "validOrderClauseCriteria" : ["asc", "desc"],
    "validMailAttachmentFields" : ["Id", "Name", "ContentType", "LastModifiedDateTime", "Size", "IsInline"],
    "validCalendarFields" : ["Id", "CreatedDateTime", "LastModifiedDateTime", "ChangeKey", "Categories", "HasAttachments", "Subject", "BodyPreview", "Importance", "WebLink", "Body", "ContentType", "Content", "Name", "OriginalStartTimeZone", "OriginalEndTimeZone", "iCalUId", "ReminderMinutesBeforeStart", "IsReminderOn", "Sensitivity", "IsAllDay", "IsCancelled", "IsOrganizer", "ResponseRequested", "SeriesMasterId", "ShowAs", "Type", "OnlineMeetingUrl", "ResponseStatus", "Start", "End", "Location", "Recurrence", "Attendees", "Organizer"],
    "validEventType" : ["Created", "Updated", "Deleted"],
    "validEventCategory" : ["Messages", "Events", "Contacts", "Conversations"],
    "dateTimeFields" : ["startDateTime", "endDateTime"],
    "validClauseFields" : ["orClause", "andClause"],
    "validSearchFields" : {
        "mail" : ["subject", "from", "body", "attachments", "bccRecipients", "category", "ccRecipients", "content", "hasAttachments", "participants", "receivedDateTime", "sender", "toRecipients"],
        "contact" : ["displayName", "emailAddress"]
    }
}
