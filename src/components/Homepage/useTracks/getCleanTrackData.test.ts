import getCleanTrackData from "./getCleanTrackData";

const uncleanData = [ {
    "added_at" : "2022-08-10T10:10:03Z",
    "track" : {
      "album" : {
        "album_type" : "single",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/2TwOrUcYnAlIiKmVQkkoSZ"
          },
          "href" : "https://api.spotify.com/v1/artists/2TwOrUcYnAlIiKmVQkkoSZ",
          "id" : "2TwOrUcYnAlIiKmVQkkoSZ",
          "name" : "Wet Leg",
          "type" : "artist",
          "uri" : "spotify:artist:2TwOrUcYnAlIiKmVQkkoSZ"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/2EVCxBosAlVsC0d7DAJXCA"
        },
        "href" : "https://api.spotify.com/v1/albums/2EVCxBosAlVsC0d7DAJXCA",
        "id" : "2EVCxBosAlVsC0d7DAJXCA",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b273dff1ae58fd41eace32de5c89",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e02dff1ae58fd41eace32de5c89",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d00004851dff1ae58fd41eace32de5c89",
          "width" : 64
        } ],
        "name" : "Wet Dream",
        "release_date" : "2021-09-28",
        "release_date_precision" : "day",
        "total_tracks" : 2,
        "type" : "album",
        "uri" : "spotify:album:2EVCxBosAlVsC0d7DAJXCA"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/2TwOrUcYnAlIiKmVQkkoSZ"
        },
        "href" : "https://api.spotify.com/v1/artists/2TwOrUcYnAlIiKmVQkkoSZ",
        "id" : "2TwOrUcYnAlIiKmVQkkoSZ",
        "name" : "Wet Leg",
        "type" : "artist",
        "uri" : "spotify:artist:2TwOrUcYnAlIiKmVQkkoSZ"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 140083,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "GBCEL2100487"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/6pjJUY0O4XgrYFGf9SwD7u"
      },
      "href" : "https://api.spotify.com/v1/tracks/6pjJUY0O4XgrYFGf9SwD7u",
      "id" : "6pjJUY0O4XgrYFGf9SwD7u",
      "is_local" : false,
      "name" : "Wet Dream",
      "popularity" : 67,
      "preview_url" : "https://p.scdn.co/mp3-preview/6fadc16be3d9ed7475b32368d0f3564328be5a78?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
      "track_number" : 1,
      "type" : "track",
      "uri" : "spotify:track:6pjJUY0O4XgrYFGf9SwD7u"
    }
  }, {
    "added_at" : "2022-08-10T09:54:52Z",
    "track" : {
      "album" : {
        "album_type" : "album",
        "artists" : [ {
          "external_urls" : {
            "spotify" : "https://open.spotify.com/artist/6XYvaoDGE0VmRt83Jss9Sn"
          },
          "href" : "https://api.spotify.com/v1/artists/6XYvaoDGE0VmRt83Jss9Sn",
          "id" : "6XYvaoDGE0VmRt83Jss9Sn",
          "name" : "King Gizzard & The Lizard Wizard",
          "type" : "artist",
          "uri" : "spotify:artist:6XYvaoDGE0VmRt83Jss9Sn"
        } ],
        "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
        "external_urls" : {
          "spotify" : "https://open.spotify.com/album/4tuqA7qbVsPukqsYPPrcF7"
        },
        "href" : "https://api.spotify.com/v1/albums/4tuqA7qbVsPukqsYPPrcF7",
        "id" : "4tuqA7qbVsPukqsYPPrcF7",
        "images" : [ {
          "height" : 640,
          "url" : "https://i.scdn.co/image/ab67616d0000b27380c6db47e75d58e25b72f2ca",
          "width" : 640
        }, {
          "height" : 300,
          "url" : "https://i.scdn.co/image/ab67616d00001e0280c6db47e75d58e25b72f2ca",
          "width" : 300
        }, {
          "height" : 64,
          "url" : "https://i.scdn.co/image/ab67616d0000485180c6db47e75d58e25b72f2ca",
          "width" : 64
        } ],
        "name" : "Omnium Gatherum",
        "release_date" : "2022-04-22",
        "release_date_precision" : "day",
        "total_tracks" : 16,
        "type" : "album",
        "uri" : "spotify:album:4tuqA7qbVsPukqsYPPrcF7"
      },
      "artists" : [ {
        "external_urls" : {
          "spotify" : "https://open.spotify.com/artist/6XYvaoDGE0VmRt83Jss9Sn"
        },
        "href" : "https://api.spotify.com/v1/artists/6XYvaoDGE0VmRt83Jss9Sn",
        "id" : "6XYvaoDGE0VmRt83Jss9Sn",
        "name" : "King Gizzard & The Lizard Wizard",
        "type" : "artist",
        "uri" : "spotify:artist:6XYvaoDGE0VmRt83Jss9Sn"
      } ],
      "available_markets" : [ "AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS", "XK", "ZA", "ZM", "ZW" ],
      "disc_number" : 1,
      "duration_ms" : 364599,
      "explicit" : false,
      "external_ids" : {
        "isrc" : "AU2ZC2100203"
      },
      "external_urls" : {
        "spotify" : "https://open.spotify.com/track/23azGRczkSa6JF9JKKiBh2"
      },
      "href" : "https://api.spotify.com/v1/tracks/23azGRczkSa6JF9JKKiBh2",
      "id" : "23azGRczkSa6JF9JKKiBh2",
      "is_local" : false,
      "name" : "Magenta Mountain",
      "popularity" : 55,
      "preview_url" : "https://p.scdn.co/mp3-preview/62fb84e9f049bd98f9b7f29c49d50c617012dc6b?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
      "track_number" : 2,
      "type" : "track",
      "uri" : "spotify:track:23azGRczkSa6JF9JKKiBh2"
    }
  } ]

test('getCleanTrackData cleans up raw sptofy data', () => {

  const cleanData = getCleanTrackData(uncleanData)

  expect(cleanData.length).toBe(2)
  expect(cleanData[0].id).toBe('6pjJUY0O4XgrYFGf9SwD7u')
  expect(cleanData[0].name).toBe('Wet Dream')
  expect(cleanData[0].artist.name).toBe('Wet Leg')
  expect(cleanData[1].id).toBe('23azGRczkSa6JF9JKKiBh2')
  expect(cleanData[1].name).toBe('Magenta Mountain')
  expect(cleanData[1].artist.name).toBe('King Gizzard & The Lizard Wizard')
})
