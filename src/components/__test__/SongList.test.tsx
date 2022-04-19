import { render, screen } from '@testing-library/react';
import React from 'react';
import { SongList } from '../index';

const handleSelected = jest.fn();
const data = [
  {
    album: {
      album_type: 'album',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/05CRzFTp7TouOXPuH6Tapu',
          },
          href: 'https://api.spotify.com/v1/artists/05CRzFTp7TouOXPuH6Tapu',
          id: '05CRzFTp7TouOXPuH6Tapu',
          name: 'Isyana Sarasvati',
          type: 'artist',
          uri: 'spotify:artist:05CRzFTp7TouOXPuH6Tapu',
        },
      ],
      available_markets: [
        'AD',
        'AE',
        'AG',
        'AL',
        'AM',
        'AO',
        'AR',
        'AT',
        'AU',
        'AZ',
        'BA',
        'BB',
        'BD',
        'BE',
        'BF',
        'BG',
        'BH',
        'BI',
        'BJ',
        'BN',
        'BO',
        'BR',
        'BS',
        'BT',
        'BW',
        'BY',
        'BZ',
        'CA',
        'CD',
        'CG',
        'CH',
        'CI',
        'CL',
        'CM',
        'CO',
        'CR',
        'CV',
        'CW',
        'CY',
        'CZ',
        'DE',
        'DJ',
        'DK',
        'DM',
        'DO',
        'DZ',
        'EC',
        'EE',
        'EG',
        'ES',
        'FI',
        'FJ',
        'FM',
        'FR',
        'GA',
        'GB',
        'GD',
        'GE',
        'GH',
        'GM',
        'GN',
        'GQ',
        'GR',
        'GT',
        'GW',
        'GY',
        'HK',
        'HN',
        'HR',
        'HT',
        'HU',
        'ID',
        'IE',
        'IL',
        'IN',
        'IQ',
        'IS',
        'IT',
        'JM',
        'JO',
        'JP',
        'KE',
        'KG',
        'KH',
        'KI',
        'KM',
        'KN',
        'KR',
        'KW',
        'KZ',
        'LA',
        'LB',
        'LC',
        'LI',
        'LK',
        'LR',
        'LS',
        'LT',
        'LU',
        'LV',
        'LY',
        'MA',
        'MC',
        'MD',
        'ME',
        'MG',
        'MH',
        'MK',
        'ML',
        'MN',
        'MO',
        'MR',
        'MT',
        'MU',
        'MV',
        'MW',
        'MX',
        'MY',
        'MZ',
        'NA',
        'NE',
        'NG',
        'NI',
        'NL',
        'NO',
        'NP',
        'NR',
        'NZ',
        'OM',
        'PA',
        'PE',
        'PG',
        'PH',
        'PK',
        'PL',
        'PS',
        'PT',
        'PW',
        'PY',
        'QA',
        'RO',
        'RS',
        'RW',
        'SA',
        'SB',
        'SC',
        'SE',
        'SG',
        'SI',
        'SK',
        'SL',
        'SM',
        'SN',
        'SR',
        'ST',
        'SV',
        'SZ',
        'TD',
        'TG',
        'TH',
        'TJ',
        'TL',
        'TN',
        'TO',
        'TR',
        'TT',
        'TV',
        'TW',
        'TZ',
        'UA',
        'UG',
        'US',
        'UY',
        'UZ',
        'VC',
        'VE',
        'VN',
        'VU',
        'WS',
        'XK',
        'ZA',
        'ZM',
        'ZW',
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/6TXaOwBLoyJrD6vem7L8Ba',
      },
      href: 'https://api.spotify.com/v1/albums/6TXaOwBLoyJrD6vem7L8Ba',
      id: '6TXaOwBLoyJrD6vem7L8Ba',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b273714fc63956d45e97196c7af7',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e02714fc63956d45e97196c7af7',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d00004851714fc63956d45e97196c7af7',
          width: 64,
        },
      ],
      name: 'EXPLORE!',
      release_date: '2015-11-25',
      release_date_precision: 'day',
      total_tracks: 10,
      type: 'album',
      uri: 'spotify:album:6TXaOwBLoyJrD6vem7L8Ba',
    },
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/05CRzFTp7TouOXPuH6Tapu',
        },
        href: 'https://api.spotify.com/v1/artists/05CRzFTp7TouOXPuH6Tapu',
        id: '05CRzFTp7TouOXPuH6Tapu',
        name: 'Isyana Sarasvati',
        type: 'artist',
        uri: 'spotify:artist:05CRzFTp7TouOXPuH6Tapu',
      },
    ],
    available_markets: [
      'AD',
      'AE',
      'AG',
      'AL',
      'AM',
      'AO',
      'AR',
      'AT',
      'AU',
      'AZ',
      'BA',
      'BB',
      'BD',
      'BE',
      'BF',
      'BG',
      'BH',
      'BI',
      'BJ',
      'BN',
      'BO',
      'BR',
      'BS',
      'BT',
      'BW',
      'BY',
      'BZ',
      'CA',
      'CD',
      'CG',
      'CH',
      'CI',
      'CL',
      'CM',
      'CO',
      'CR',
      'CV',
      'CW',
      'CY',
      'CZ',
      'DE',
      'DJ',
      'DK',
      'DM',
      'DO',
      'DZ',
      'EC',
      'EE',
      'EG',
      'ES',
      'FI',
      'FJ',
      'FM',
      'FR',
      'GA',
      'GB',
      'GD',
      'GE',
      'GH',
      'GM',
      'GN',
      'GQ',
      'GR',
      'GT',
      'GW',
      'GY',
      'HK',
      'HN',
      'HR',
      'HT',
      'HU',
      'ID',
      'IE',
      'IL',
      'IN',
      'IQ',
      'IS',
      'IT',
      'JM',
      'JO',
      'JP',
      'KE',
      'KG',
      'KH',
      'KI',
      'KM',
      'KN',
      'KR',
      'KW',
      'KZ',
      'LA',
      'LB',
      'LC',
      'LI',
      'LK',
      'LR',
      'LS',
      'LT',
      'LU',
      'LV',
      'LY',
      'MA',
      'MC',
      'MD',
      'ME',
      'MG',
      'MH',
      'MK',
      'ML',
      'MN',
      'MO',
      'MR',
      'MT',
      'MU',
      'MV',
      'MW',
      'MX',
      'MY',
      'MZ',
      'NA',
      'NE',
      'NG',
      'NI',
      'NL',
      'NO',
      'NP',
      'NR',
      'NZ',
      'OM',
      'PA',
      'PE',
      'PG',
      'PH',
      'PK',
      'PL',
      'PS',
      'PT',
      'PW',
      'PY',
      'QA',
      'RO',
      'RS',
      'RW',
      'SA',
      'SB',
      'SC',
      'SE',
      'SG',
      'SI',
      'SK',
      'SL',
      'SM',
      'SN',
      'SR',
      'ST',
      'SV',
      'SZ',
      'TD',
      'TG',
      'TH',
      'TJ',
      'TL',
      'TN',
      'TO',
      'TR',
      'TT',
      'TV',
      'TW',
      'TZ',
      'UA',
      'UG',
      'US',
      'UY',
      'UZ',
      'VC',
      'VE',
      'VN',
      'VU',
      'WS',
      'XK',
      'ZA',
      'ZM',
      'ZW',
    ],
    disc_number: 1,
    duration_ms: 209293,
    explicit: false,
    external_ids: {
      isrc: 'IDAC51400088',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/track/1cKm6kQLMhc7N3mHS238fk',
    },
    href: 'https://api.spotify.com/v1/tracks/1cKm6kQLMhc7N3mHS238fk',
    id: '1cKm6kQLMhc7N3mHS238fk',
    is_local: false,
    name: 'Tetap Dalam Jiwa',
    popularity: 60,
    preview_url:
      'https://p.scdn.co/mp3-preview/61aa684cdffadea9a09c9db54cc2caced6b9d820?cid=acccaa5ef3044723bd62ba23ad88ecde',
    track_number: 6,
    type: 'track',
    uri: 'spotify:track:1cKm6kQLMhc7N3mHS238fk',
    isSelected: false,
  },
  {
    album: {
      album_type: 'single',
      artists: [
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/05CRzFTp7TouOXPuH6Tapu',
          },
          href: 'https://api.spotify.com/v1/artists/05CRzFTp7TouOXPuH6Tapu',
          id: '05CRzFTp7TouOXPuH6Tapu',
          name: 'Isyana Sarasvati',
          type: 'artist',
          uri: 'spotify:artist:05CRzFTp7TouOXPuH6Tapu',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/4cgBCGxtlfap2g6jveB7du',
          },
          href: 'https://api.spotify.com/v1/artists/4cgBCGxtlfap2g6jveB7du',
          id: '4cgBCGxtlfap2g6jveB7du',
          name: 'Afgan',
          type: 'artist',
          uri: 'spotify:artist:4cgBCGxtlfap2g6jveB7du',
        },
        {
          external_urls: {
            spotify: 'https://open.spotify.com/artist/04u3fc37nHFKN7GJTSIwI8',
          },
          href: 'https://api.spotify.com/v1/artists/04u3fc37nHFKN7GJTSIwI8',
          id: '04u3fc37nHFKN7GJTSIwI8',
          name: 'Rendy Pandugo',
          type: 'artist',
          uri: 'spotify:artist:04u3fc37nHFKN7GJTSIwI8',
        },
      ],
      available_markets: [
        'AD',
        'AE',
        'AG',
        'AL',
        'AM',
        'AO',
        'AR',
        'AT',
        'AU',
        'AZ',
        'BA',
        'BB',
        'BD',
        'BE',
        'BF',
        'BG',
        'BH',
        'BI',
        'BJ',
        'BN',
        'BO',
        'BR',
        'BS',
        'BT',
        'BW',
        'BY',
        'BZ',
        'CA',
        'CD',
        'CG',
        'CH',
        'CI',
        'CL',
        'CM',
        'CO',
        'CR',
        'CV',
        'CW',
        'CY',
        'CZ',
        'DE',
        'DJ',
        'DK',
        'DM',
        'DO',
        'DZ',
        'EC',
        'EE',
        'EG',
        'ES',
        'FI',
        'FJ',
        'FM',
        'FR',
        'GA',
        'GB',
        'GD',
        'GE',
        'GH',
        'GM',
        'GN',
        'GQ',
        'GR',
        'GT',
        'GW',
        'GY',
        'HK',
        'HN',
        'HR',
        'HT',
        'HU',
        'ID',
        'IE',
        'IL',
        'IN',
        'IQ',
        'IS',
        'IT',
        'JM',
        'JO',
        'JP',
        'KE',
        'KG',
        'KH',
        'KI',
        'KM',
        'KN',
        'KR',
        'KW',
        'KZ',
        'LA',
        'LB',
        'LC',
        'LI',
        'LK',
        'LR',
        'LS',
        'LT',
        'LU',
        'LV',
        'LY',
        'MA',
        'MC',
        'MD',
        'ME',
        'MG',
        'MH',
        'MK',
        'ML',
        'MN',
        'MO',
        'MR',
        'MT',
        'MU',
        'MV',
        'MW',
        'MX',
        'MY',
        'MZ',
        'NA',
        'NE',
        'NG',
        'NI',
        'NL',
        'NO',
        'NP',
        'NR',
        'NZ',
        'OM',
        'PA',
        'PE',
        'PG',
        'PH',
        'PK',
        'PL',
        'PS',
        'PT',
        'PW',
        'PY',
        'QA',
        'RO',
        'RS',
        'RW',
        'SA',
        'SB',
        'SC',
        'SE',
        'SG',
        'SI',
        'SK',
        'SL',
        'SM',
        'SN',
        'SR',
        'ST',
        'SV',
        'SZ',
        'TD',
        'TG',
        'TH',
        'TJ',
        'TL',
        'TN',
        'TO',
        'TR',
        'TT',
        'TV',
        'TW',
        'TZ',
        'UA',
        'UG',
        'US',
        'UY',
        'UZ',
        'VC',
        'VE',
        'VN',
        'VU',
        'WS',
        'XK',
        'ZA',
        'ZM',
        'ZW',
      ],
      external_urls: {
        spotify: 'https://open.spotify.com/album/3GJjPtV0iPKM3fLPvqdURX',
      },
      href: 'https://api.spotify.com/v1/albums/3GJjPtV0iPKM3fLPvqdURX',
      id: '3GJjPtV0iPKM3fLPvqdURX',
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/ab67616d0000b27356f9cf6a648e96dcaffc1434',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/ab67616d00001e0256f9cf6a648e96dcaffc1434',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/ab67616d0000485156f9cf6a648e96dcaffc1434',
          width: 64,
        },
      ],
      name: 'Heaven',
      release_date: '2018-02-14',
      release_date_precision: 'day',
      total_tracks: 1,
      type: 'album',
      uri: 'spotify:album:3GJjPtV0iPKM3fLPvqdURX',
    },
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/05CRzFTp7TouOXPuH6Tapu',
        },
        href: 'https://api.spotify.com/v1/artists/05CRzFTp7TouOXPuH6Tapu',
        id: '05CRzFTp7TouOXPuH6Tapu',
        name: 'Isyana Sarasvati',
        type: 'artist',
        uri: 'spotify:artist:05CRzFTp7TouOXPuH6Tapu',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/4cgBCGxtlfap2g6jveB7du',
        },
        href: 'https://api.spotify.com/v1/artists/4cgBCGxtlfap2g6jveB7du',
        id: '4cgBCGxtlfap2g6jveB7du',
        name: 'Afgan',
        type: 'artist',
        uri: 'spotify:artist:4cgBCGxtlfap2g6jveB7du',
      },
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/04u3fc37nHFKN7GJTSIwI8',
        },
        href: 'https://api.spotify.com/v1/artists/04u3fc37nHFKN7GJTSIwI8',
        id: '04u3fc37nHFKN7GJTSIwI8',
        name: 'Rendy Pandugo',
        type: 'artist',
        uri: 'spotify:artist:04u3fc37nHFKN7GJTSIwI8',
      },
    ],
    available_markets: [
      'AD',
      'AE',
      'AG',
      'AL',
      'AM',
      'AO',
      'AR',
      'AT',
      'AU',
      'AZ',
      'BA',
      'BB',
      'BD',
      'BE',
      'BF',
      'BG',
      'BH',
      'BI',
      'BJ',
      'BN',
      'BO',
      'BR',
      'BS',
      'BT',
      'BW',
      'BY',
      'BZ',
      'CA',
      'CD',
      'CG',
      'CH',
      'CI',
      'CL',
      'CM',
      'CO',
      'CR',
      'CV',
      'CW',
      'CY',
      'CZ',
      'DE',
      'DJ',
      'DK',
      'DM',
      'DO',
      'DZ',
      'EC',
      'EE',
      'EG',
      'ES',
      'FI',
      'FJ',
      'FM',
      'FR',
      'GA',
      'GB',
      'GD',
      'GE',
      'GH',
      'GM',
      'GN',
      'GQ',
      'GR',
      'GT',
      'GW',
      'GY',
      'HK',
      'HN',
      'HR',
      'HT',
      'HU',
      'ID',
      'IE',
      'IL',
      'IN',
      'IQ',
      'IS',
      'IT',
      'JM',
      'JO',
      'JP',
      'KE',
      'KG',
      'KH',
      'KI',
      'KM',
      'KN',
      'KR',
      'KW',
      'KZ',
      'LA',
      'LB',
      'LC',
      'LI',
      'LK',
      'LR',
      'LS',
      'LT',
      'LU',
      'LV',
      'LY',
      'MA',
      'MC',
      'MD',
      'ME',
      'MG',
      'MH',
      'MK',
      'ML',
      'MN',
      'MO',
      'MR',
      'MT',
      'MU',
      'MV',
      'MW',
      'MX',
      'MY',
      'MZ',
      'NA',
      'NE',
      'NG',
      'NI',
      'NL',
      'NO',
      'NP',
      'NR',
      'NZ',
      'OM',
      'PA',
      'PE',
      'PG',
      'PH',
      'PK',
      'PL',
      'PS',
      'PT',
      'PW',
      'PY',
      'QA',
      'RO',
      'RS',
      'RW',
      'SA',
      'SB',
      'SC',
      'SE',
      'SG',
      'SI',
      'SK',
      'SL',
      'SM',
      'SN',
      'SR',
      'ST',
      'SV',
      'SZ',
      'TD',
      'TG',
      'TH',
      'TJ',
      'TL',
      'TN',
      'TO',
      'TR',
      'TT',
      'TV',
      'TW',
      'TZ',
      'UA',
      'UG',
      'US',
      'UY',
      'UZ',
      'VC',
      'VE',
      'VN',
      'VU',
      'WS',
      'XK',
      'ZA',
      'ZM',
      'ZW',
    ],
    disc_number: 1,
    duration_ms: 218506,
    explicit: false,
    external_ids: {
      isrc: 'IDAC51800001',
    },
    external_urls: {
      spotify: 'https://open.spotify.com/track/3gBFAvpAVSNohs3ESRMYHi',
    },
    href: 'https://api.spotify.com/v1/tracks/3gBFAvpAVSNohs3ESRMYHi',
    id: '3gBFAvpAVSNohs3ESRMYHi',
    is_local: false,
    name: 'Heaven',
    popularity: 55,
    preview_url:
      'https://p.scdn.co/mp3-preview/c16b1ac8ac6ba91b7a0e75681e43f8bcd4b4952f?cid=acccaa5ef3044723bd62ba23ad88ecde',
    track_number: 1,
    type: 'track',
    uri: 'spotify:track:3gBFAvpAVSNohs3ESRMYHi',
    isSelected: false,
  },
];

test('renders SongList component', () => {
  render(<SongList data={data} handleSelected={handleSelected} />);

  expect(screen.getByText('Tetap Dalam Jiwa')).toBeInTheDocument();
  expect(screen.getAllByText('Isyana Sarasvati')[0]).toBeInTheDocument();
  expect(screen.getByText('EXPLORE!')).toBeInTheDocument();

  expect(screen.getAllByText('Heaven')[0]).toBeInTheDocument();

  expect(screen.getByTestId('song-list')).toBeInTheDocument();
});
