type MsBlog = {
    /** like 18-digit decimal number */
    id: string;
    account: MsAccount;
    bookmarked: boolean;
    card: any;
    content: string;
    /** '2023-01-16T16:09:57.973Z' */
    created_at: string;
    edited_at: string;
    emojis: any[];
    favourited: boolean;
    favourites_count: number;
    filtered: any[];
    in_reply_do_account_id: string | null;
    in_reply_to_id: string | null;
    language: null;
    media_attachments: any[];
    mentions: MsAccount[];
    muted: boolean;
    poll: any;
    reblog: MsBlog;
    reblogged: boolean;
    reblogs_count: number;
    replies_count: number;
    spoilter_text: string;
    tags: any[];
    url: string;
}

type MsAccount = {
    acct: string;
    avatar: string;
    avatar_static: string;
    bot: boolean;
    created_at: string;
    discoverable: boolean;
    display_name: string;
    emojis: any[];
    fields: {
      name: string;
      value: string;
      verified_at: any;
    }[];
    followers_count: number;
    following_count: number;
    group: boolean;
    header: string;
    header_static: string;
    id: string;
    last_status_at: string;
    locked: boolean;
    note: string;
    statuses_count: number;
    url: string;
    username: string;
}