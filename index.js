// @ts-check

if (!XMLHttpRequest.prototype.super_send) XMLHttpRequest.prototype.super_send = XMLHttpRequest.prototype.send;
if (!XMLHttpRequest.prototype.super_open) XMLHttpRequest.prototype.super_open = XMLHttpRequest.prototype.open;

  /** @this {XMLHttpRequest} */
XMLHttpRequest.prototype.send = function xhrSendOverride(body) {
  var xhr = this;
  if (!xhr.useRawNoRedirect) {
    var searchText =
      /^\/api\/v2\/search\?/.test(xhr.open_args && xhr.open_args.url || '') &&
      (/[?&]q=([^&]+)&/.exec(xhr.open_args.url) || [])[1];
    if (searchText) {
      // when it's ready, just return after here
      handleSearchRequest(searchText);
    } else {
      console.log('API ', xhr.open_args, body);
    }
  }
  xhr.super_send(body);

  /** @param {string} searchText */
  function handleSearchRequest(searchText) {

    /** @typedef {{
     *  id: string // like 18-digit decimal number
     *  account: MsAccount
     *  bookmarked: boolean
     *  card: any
     *  content: string // HTML
     *  created_at: string // '2023-01-16T16:09:57.973Z'
     *  edited_at: string
     *  emojis: any[]
     *  favourited: boolean
     *  favourites_count: number
     *  filtered: any[]
     *  in_reply_do_account_id: string | null
     *  in_reply_to_id: string | null
     *  language: null
     *  media_attachments: any[]
     *  mentions: MsAccount[]
     *  muted: boolean
     *  poll: any
     *  reblog: MsBlog | undefined
     *  reblogged: boolean
     *  reblogs_count: number
     *  replies_count: number
     *  spoilter_text: string
     *  tags: any[]
     *  uri: string
     *  url: string
     * }} MsBlog */

    /** @typedef {{
    * acct: string
    * avatar: string
    * avatar_static: string
    * bot: boolean
    * created_at: string // 2022-11-04T00:00:00.000Z
    * discoverable: boolean
    * display_name: string
    * emojis: any[]
    * fields: {name: string, value: string, verified_at: any}[]
    * followers_count: number
    * following_count: number
    * group: boolean
    * header: string
    * header_static: string
    * id: string // like 18-number decimal number
    * last_status_at: string // 2023-01-16
    * locked: boolean
    * note: string // HTML
    * statuses_count: number
    * url: string // 'https://server/@account'
    * username: string // 'account'
    * }} MsAccount */

    /** @typedef {{
     *  data: T[]
     *  more: () => Promise<Feed<T>>
     * }} Feed<T> */

    /** @return {Promise<Feed<MsBlog>>} */
    function getHomefeed() {

    }
  }
};

/** @this {XMLHttpRequest} */
XMLHttpRequest.prototype.open = function xhrOpenOverride(method, url, async, user, password) {
  var xhr = this;
  xhr.open_args = { method: method, url: url, async: async, user: user, password: password };
  xhr.super_open(method, url, async, user, password);
};