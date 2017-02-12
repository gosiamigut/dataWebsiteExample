var map = new Datamap({
	element: document.getElementById('container'),
	scope: 'world',
	geographyConfig: {
		popupTemplate: function(geo, data) {
			return ['<div class="hoverinfo"><strong>',
					geo.properties.name + '</strong><br>',
					'Population: ' + (data.startOfConflict * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
					'</div>'].join('');
		}
	},
	fills: {
		0: '#fffacd',
		1: '#ffdb9a',
		2: '#ffb87a',
		3: '#fe9468',
		4: '#f2705f',
		5: '#e14e54',
		6: '#ca2e43',
		7: '#ad102a',
		8: '#8b0000',	
		defaultFill: '#fffacd'
	},
	data: {
		'AFG': {
			fillKey: "1",
			name: "Afghanistan",
			startOfConflict: 32527
		},
		'ALB': {
			fillKey: "0",
			name: "Albania",
			startOfConflict: 2897
		},
		'DZA': {
			fillKey: "1",
			name: "Algeria",
			startOfConflict: 39667
		},
		'ASM': {
			fillKey: "0",
			name: "American Samoa",
			startOfConflict: 56
		},
		'AND': {
			fillKey: "0",
			name: "Andorra",
			startOfConflict: 70
		},
		'AGO': {
			fillKey: "1",
			name: "Angola",
			startOfConflict: 25022
		},
		'AIA': {
			fillKey: "0",
			name: "Anguilla",
			startOfConflict: 15
		},
		'ATG': {
			fillKey: "0",
			name: "Antigua and Barbuda",
			startOfConflict: 92
		},
		'ARG': {
			fillKey: "2",
			name: "Argentina",
			startOfConflict: 43417
		},
		'ARM': {
			fillKey: "0",
			name: "Armenia",
			startOfConflict: 3018
		},
		'ABW': {
			fillKey: "0",
			name: "Aruba",
			startOfConflict: 104
		},
		'AUS': {
			fillKey: "1",
			name: "Australia",
			startOfConflict: 23969
		},
		'AUT': {
			fillKey: "0",
			name: "Austria",
			startOfConflict: 8545
		},
		'AZE': {
			fillKey: "0",
			name: "Azerbaijan",
			startOfConflict: 9754
		},
		'BHS': {
			fillKey: "0",
			name: "Bahamas",
			startOfConflict: 388
		},
		'BHR': {
			fillKey: "0",
			name: "Bahrain",
			startOfConflict: 1377
		},
		'BGD': {
			fillKey: "8",
			name: "Bangladesh",
			startOfConflict: 160996
		},
		'BRB': {
			fillKey: "0",
			name: "Barbados",
			startOfConflict: 284
		},
		'BLR': {
			fillKey: "0",
			name: "Belarus",
			startOfConflict: 9496
		},
		'BEL': {
			fillKey: "0",
			name: "Belgium",
			startOfConflict: 11299
		},
		'BLZ': {
			fillKey: "0",
			name: "Belize",
			startOfConflict: 359
		},
		'BEN': {
			fillKey: "0",
			name: "Benin",
			startOfConflict: 10880
		},
		'BMU': {
			fillKey: "0",
			name: "Bermuda",
			startOfConflict: 62
		},
		'BTN': {
			fillKey: "0",
			name: "Bhutan",
			startOfConflict: 775
		},
		'BOL': {
			fillKey: "0",
			name: "Bolivia, Plurinational State of",
			startOfConflict: 10725
		},
		'BIH': {
			fillKey: "0",
			name: "Bosnia and Herzegovina",
			startOfConflict: 3810
		},
		'BWA': {
			fillKey: "0",
			name: "Botswana",
			startOfConflict: 2262
		},
		'BRA': {
			fillKey: "8",
			name: "Brazil",
			startOfConflict: 207848
		},
		'VGB': {
			fillKey: "0",
			name: "Virgin Islands, British",
			startOfConflict: 30
		},
		'BRN': {
			fillKey: "0",
			name: "Brunei Darussalam",
			startOfConflict: 423
		},
		'BGR': {
			fillKey: "0",
			name: "Bulgaria",
			startOfConflict: 7150
		},
		'BFA': {
			fillKey: "0",
			name: "Burkina Faso",
			startOfConflict: 18106
		},
		'BDI': {
			fillKey: "0",
			name: "Burundi",
			startOfConflict: 11179
		},
		'CPV': {
			fillKey: "0",
			name: "Cape Verde",
			startOfConflict: 521
		},
		'KHM': {
			fillKey: "0",
			name: "Cambodia",
			startOfConflict: 15578
		},
		'CMR': {
			fillKey: "1",
			name: "Cameroon",
			startOfConflict: 23344
		},
		'CAN': {
			fillKey: "1",
			name: "Canada",
			startOfConflict: 35940
		},
		'CYM': {
			fillKey: "0",
			name: "Cayman Islands",
			startOfConflict: 60
		},
		'CAF': {
			fillKey: "0",
			name: "Central African Republic",
			startOfConflict: 4900
		},
		'TCD': {
			fillKey: "0",
			name: "Chad",
			startOfConflict: 14037
		},
		'CHL': {
			fillKey: "0",
			name: "Chile",
			startOfConflict: 17948
		},
		'CHN': {
			fillKey: "8",
			name: "China",
			startOfConflict: 1376049
		},
		'HKG': {
			fillKey: "0",
			name: "Hong Kong",
			startOfConflict: 7288
		},
		'MAC': {
			fillKey: "0",
			name: "Macao",
			startOfConflict: 588
		},
		'COL': {
			fillKey: "2",
			name: "Colombia",
			startOfConflict: 48229
		},
		'COM': {
			fillKey: "0",
			name: "Comoros",
			startOfConflict: 788
		},
		'COG': {
			fillKey: "0",
			name: "Congo",
			startOfConflict: 4620
		},
		'COK': {
			fillKey: "0",
			name: "Cook Islands",
			startOfConflict: 21
		},
		'CRI': {
			fillKey: "0",
			name: "Costa Rica",
			startOfConflict: 4808
		},
		'CIV': {
			fillKey: "1",
			name: "Cote d'Ivoire",
			startOfConflict: 22702
		},
		'HRV': {
			fillKey: "0",
			name: "Croatia",
			startOfConflict: 4240
		},
		'CUB': {
			fillKey: "0",
			name: "Cuba",
			startOfConflict: 11390
		},
		'CUW': {
			fillKey: "0",
			name: "Curacao",
			startOfConflict: 157
		},
		'CYP': {
			fillKey: "0",
			name: "Cyprus",
			startOfConflict: 1165
		},
		'CZE': {
			fillKey: "0",
			name: "Czech Republic",
			startOfConflict: 10543
		},
		'PRK': {
			fillKey: "1",
			name: "Korea, Democratic People's Republic of",
			startOfConflict: 25155
		},
		'COD': {
			fillKey: "3",
			name: "Congo, the Democratic Republic of the",
			startOfConflict: 77267
		},
		'DNK': {
			fillKey: "0",
			name: "Denmark",
			startOfConflict: 5669
		},
		'DJI': {
			fillKey: "0",
			name: "Djibouti",
			startOfConflict: 888
		},
		'DMA': {
			fillKey: "0",
			name: "Dominica",
			startOfConflict: 73
		},
		'DOM': {
			fillKey: "0",
			name: "Dominican Republic",
			startOfConflict: 10528
		},
		'ECU': {
			fillKey: "0",
			name: "Ecuador",
			startOfConflict: 16144
		},
		'EGY': {
			fillKey: "4",
			name: "Egypt",
			startOfConflict: 91508
		},
		'SLV': {
			fillKey: "0",
			name: "El Salvador",
			startOfConflict: 6127
		},
		'GNQ': {
			fillKey: "0",
			name: "Equatorial Guinea",
			startOfConflict: 845
		},
		'ERI': {
			fillKey: "0",
			name: "Eritrea",
			startOfConflict: 5228
		},
		'EST': {
			fillKey: "0",
			name: "Estonia",
			startOfConflict: 1313
		},
		'ETH': {
			fillKey: "4",
			name: "Ethiopia",
			startOfConflict: 99391
		},
		'FRO': {
			fillKey: "0",
			name: "Faroe Islands",
			startOfConflict: 48
		},
		'FLK': {
			fillKey: "0",
			name: "Falkland Islands (Malvinas)",
			startOfConflict: 3
		},
		'FJI': {
			fillKey: "0",
			name: "Fiji",
			startOfConflict: 892
		},
		'FIN': {
			fillKey: "0",
			name: "Finland",
			startOfConflict: 5503
		},
		'FRA': {
			fillKey: "3",
			name: "France",
			startOfConflict: 64395
		},
		'GUF': {
			fillKey: "0",
			name: "French Guiana",
			startOfConflict: 269
		},
		'PYF': {
			fillKey: "0",
			name: "French Polynesia",
			startOfConflict: 283
		},
		'GAB': {
			fillKey: "0",
			name: "Gabon",
			startOfConflict: 1725
		},
		'GMB': {
			fillKey: "0",
			name: "Gambia",
			startOfConflict: 1991
		},
		'GEO': {
			fillKey: "0",
			name: "Georgia",
			startOfConflict: 4000
		},
		'DEU': {
			fillKey: "4",
			name: "Germany",
			startOfConflict: 80689
		},
		'GHA': {
			fillKey: "1",
			name: "Ghana",
			startOfConflict: 27410
		},
		'GIB': {
			fillKey: "0",
			name: "Gibraltar",
			startOfConflict: 32
		},
		'GRC': {
			fillKey: "0",
			name: "Greece",
			startOfConflict: 10955
		},
		'GRL': {
			fillKey: "0",
			name: "Greenland",
			startOfConflict: 56
		},
		'GRD': {
			fillKey: "0",
			name: "Grenada",
			startOfConflict: 107
		},
		'GLP': {
			fillKey: "0",
			name: "Guadeloupe",
			startOfConflict: 468
		},
		'GUM': {
			fillKey: "0",
			name: "Guam",
			startOfConflict: 170
		},
		'GTM': {
			fillKey: "0",
			name: "Guatemala",
			startOfConflict: 16343
		},
		'GIN': {
			fillKey: "0",
			name: "Guinea",
			startOfConflict: 12609
		},
		'GNB': {
			fillKey: "0",
			name: "Guinea - Bissau",
			startOfConflict: 1844
		},
		'GUY': {
			fillKey: "0",
			name: "Guyana",
			startOfConflict: 767
		},
		'HTI': {
			fillKey: "0",
			name: "Haiti",
			startOfConflict: 10711
		},
		'VAT': {
			fillKey: "0",
			name: "Holy See (Vatican City State)",
			startOfConflict: 1
		},
		'HND': {
			fillKey: "0",
			name: "Honduras",
			startOfConflict: 8075
		},
		'HUN': {
			fillKey: "0",
			name: "Hungary",
			startOfConflict: 9855
		},
		'ISL': {
			fillKey: "0",
			name: "Iceland",
			startOfConflict: 329
		},
		'IND': {
			fillKey: "8",
			name: "India",
			startOfConflict: 1311051
		},
		'IDN': {
			fillKey: "8",
			name: "Indonesia",
			startOfConflict: 257564
		},
		'IRN': {
			fillKey: "3",
			name: "Iran, Islamic Republic of",
			startOfConflict: 79109
		},
		'IRQ': {
			fillKey: "1",
			name: "Iraq",
			startOfConflict: 36423
		},
		'IRL': {
			fillKey: "0",
			name: "Ireland",
			startOfConflict: 4688
		},
		'IMN': {
			fillKey: "0",
			name: "Isle of Man",
			startOfConflict: 88
		},
		'ISR': {
			fillKey: "0",
			name: "Israel",
			startOfConflict: 8064
		},
		'ITA': {
			fillKey: "2",
			name: "Italy",
			startOfConflict: 59798
		},
		'JAM': {
			fillKey: "0",
			name: "Jamaica",
			startOfConflict: 2793
		},
		'JPN': {
			fillKey: "6",
			name: "Japan",
			startOfConflict: 126573
		},
		'JOR': {
			fillKey: "0",
			name: "Jordan",
			startOfConflict: 7595
		},
		'KAZ': {
			fillKey: "0",
			name: "Kazakhstan",
			startOfConflict: 17625
		},
		'KEN': {
			fillKey: "2",
			name: "Kenya",
			startOfConflict: 46050
		},
		'KIR': {
			fillKey: "0",
			name: "Kiribati",
			startOfConflict: 112
		},
		'KWT': {
			fillKey: "0",
			name: "Kuwait",
			startOfConflict: 3892
		},
		'KGZ': {
			fillKey: "0",
			name: "Kyrgyzstan",
			startOfConflict: 5940
		},
		'LAO': {
			fillKey: "0",
			name: "Lao People's Democratic Republic",
			startOfConflict: 6802
		},
		'LVA': {
			fillKey: "0",
			name: "Latvia",
			startOfConflict: 1971
		},
		'LBN': {
			fillKey: "0",
			name: "Lebanon",
			startOfConflict: 5851
		},
		'LSO': {
			fillKey: "0",
			name: "Lesotho",
			startOfConflict: 2135
		},
		'LBR': {
			fillKey: "0",
			name: "Liberia",
			startOfConflict: 4503
		},
		'LBY': {
			fillKey: "0",
			name: "Libya",
			startOfConflict: 6278
		},
		'LIE': {
			fillKey: "0",
			name: "Liechtenstein",
			startOfConflict: 38
		},
		'LTU': {
			fillKey: "0",
			name: "Lithuania",
			startOfConflict: 2878
		},
		'LUX': {
			fillKey: "0",
			name: "Luxembourg",
			startOfConflict: 567
		},
		'MDG': {
			fillKey: "1",
			name: "Madagascar",
			startOfConflict: 24235
		},
		'MWI': {
			fillKey: "0",
			name: "Malawi",
			startOfConflict: 17215
		},
		'MYS': {
			fillKey: "1",
			name: "Malaysia",
			startOfConflict: 30331
		},
		'MDV': {
			fillKey: "0",
			name: "Maldives",
			startOfConflict: 364
		},
		'MLI': {
			fillKey: "0",
			name: "Mali",
			startOfConflict: 17600
		},
		'MLT': {
			fillKey: "0",
			name: "Malta",
			startOfConflict: 419
		},
		'MHL': {
			fillKey: "0",
			name: "Marshall Islands",
			startOfConflict: 53
		},
		'MTQ': {
			fillKey: "0",
			name: "Martinique",
			startOfConflict: 396
		},
		'MRT': {
			fillKey: "0",
			name: "Mauritania",
			startOfConflict: 4068
		},
		'MUS': {
			fillKey: "0",
			name: "Mauritius",
			startOfConflict: 1273
		},
		'MYT': {
			fillKey: "0",
			name: "Mayotte",
			startOfConflict: 240
		},
		'MEX': {
			fillKey: "6",
			name: "Mexico",
			startOfConflict: 127017
		},
		'FSM': {
			fillKey: "0",
			name: "Micronesia, Federated States of",
			startOfConflict: 104
		},
		'MCO': {
			fillKey: "0",
			name: "Monaco",
			startOfConflict: 38
		},
		'MNG': {
			fillKey: "0",
			name: "Mongolia",
			startOfConflict: 2959
		},
		'MNE': {
			fillKey: "0",
			name: "Montenegro",
			startOfConflict: 626
		},
		'MSR': {
			fillKey: "0",
			name: "Montserrat",
			startOfConflict: 5
		},
		'MAR': {
			fillKey: "1",
			name: "Morocco",
			startOfConflict: 34378
		},
		'MOZ': {
			fillKey: "1",
			name: "Mozambique",
			startOfConflict: 27978
		},
		'MMR': {
			fillKey: "2",
			name: "Myanmar",
			startOfConflict: 53897
		},
		'NAM': {
			fillKey: "0",
			name: "Namibia",
			startOfConflict: 2459
		},
		'NRU': {
			fillKey: "0",
			name: "Nauru",
			startOfConflict: 10
		},
		'NPL': {
			fillKey: "1",
			name: "Nepal",
			startOfConflict: 28514
		},
		'NLD': {
			fillKey: "0",
			name: "Netherlands",
			startOfConflict: 16925
		},
		'NCL': {
			fillKey: "0",
			name: "New Caledonia",
			startOfConflict: 263
		},
		'NZL': {
			fillKey: "0",
			name: "New Zealand",
			startOfConflict: 4529
		},
		'NIC': {
			fillKey: "0",
			name: "Nicaragua",
			startOfConflict: 6082
		},
		'NER': {
			fillKey: "0",
			name: "Niger",
			startOfConflict: 19899
		},
		'NGA': {
			fillKey: "8",
			name: "Nigeria",
			startOfConflict: 182202
		},
		'NIU': {
			fillKey: "0",
			name: "Niue",
			startOfConflict: 2
		},
		'MNP': {
			fillKey: "0",
			name: "Northern Mariana Islands",
			startOfConflict: 55
		},
		'NOR': {
			fillKey: "0",
			name: "Norway",
			startOfConflict: 5211
		},
		'OMN': {
			fillKey: "0",
			name: "Oman",
			startOfConflict: 4491
		},
		'PAK': {
			fillKey: "8",
			name: "Pakistan",
			startOfConflict: 188925
		},
		'PLW': {
			fillKey: "0",
			name: "Palau",
			startOfConflict: 21
		},
		'PAN': {
			fillKey: "0",
			name: "Panama",
			startOfConflict: 3929
		},
		'PNG': {
			fillKey: "0",
			name: "Papua New Guinea",
			startOfConflict: 7619
		},
		'PRY': {
			fillKey: "0",
			name: "Paraguay",
			startOfConflict: 6639
		},
		'PER': {
			fillKey: "1",
			name: "Peru",
			startOfConflict: 31377
		},
		'PHL': {
			fillKey: "5",
			name: "Philippines",
			startOfConflict: 100699
		},
		'POL': {
			fillKey: "1",
			name: "Poland",
			startOfConflict: 38612
		},
		'PRT': {
			fillKey: "0",
			name: "Portugal",
			startOfConflict: 10350
		},
		'PRI': {
			fillKey: "0",
			name: "Puerto Rico",
			startOfConflict: 3683
		},
		'QAT': {
			fillKey: "0",
			name: "Qatar",
			startOfConflict: 2235
		},
		'KOR': {
			fillKey: "2",
			name: "Korea, Republic of",
			startOfConflict: 50293
		},
		'MDA': {
			fillKey: "0",
			name: "Moldova, Republic of",
			startOfConflict: 4069
		},
		'REU': {
			fillKey: "0",
			name: "Reunion",
			startOfConflict: 861
		},
		'ROU': {
			fillKey: "0",
			name: "Romania",
			startOfConflict: 19511
		},
		'RUS': {
			fillKey: "7",
			name: "Russian Federation",
			startOfConflict: 143457
		},
		'RWA': {
			fillKey: "0",
			name: "Rwanda",
			startOfConflict: 11610
		},
		'SHN': {
			fillKey: "0",
			name: "Saint Helena, Ascension and Tristan da Cunha",
			startOfConflict: 4
		},
		'KNA': {
			fillKey: "0",
			name: "Saint Kitts and Nevis",
			startOfConflict: 56
		},
		'LCA': {
			fillKey: "0",
			name: "Saint Lucia",
			startOfConflict: 185
		},
		'SPM': {
			fillKey: "0",
			name: "Saint Pierre and Miquelon",
			startOfConflict: 6
		},
		'VCT': {
			fillKey: "0",
			name: "Saint Vincent and the Grenadines",
			startOfConflict: 109
		},
		'WSM': {
			fillKey: "0",
			name: "Samoa",
			startOfConflict: 193
		},
		'SMR': {
			fillKey: "0",
			name: "San Marino",
			startOfConflict: 32
		},
		'STP': {
			fillKey: "0",
			name: "Sao Tome and Principe",
			startOfConflict: 190
		},
		'SAU': {
			fillKey: "1",
			name: "Saudi Arabia",
			startOfConflict: 31540
		},
		'SEN': {
			fillKey: "0",
			name: "Senegal",
			startOfConflict: 15129
		},
		'SRB': {
			fillKey: "0",
			name: "Serbia",
			startOfConflict: 8851
		},
		'SYC': {
			fillKey: "0",
			name: "Seychelles",
			startOfConflict: 96
		},
		'SLE': {
			fillKey: "0",
			name: "Sierra Leone",
			startOfConflict: 6453
		},
		'SGP': {
			fillKey: "0",
			name: "Singapore",
			startOfConflict: 5604
		},
		'SXM': {
			fillKey: "0",
			name: "Sint Maarten (Dutch part)",
			startOfConflict: 39
		},
		'SVK': {
			fillKey: "0",
			name: "Slovakia",
			startOfConflict: 5426
		},
		'SVN': {
			fillKey: "0",
			name: "Slovenia",
			startOfConflict: 2068
		},
		'SLB': {
			fillKey: "0",
			name: "Solomon Islands",
			startOfConflict: 584
		},
		'SOM': {
			fillKey: "0",
			name: "Somalia",
			startOfConflict: 10787
		},
		'ZAF': {
			fillKey: "2",
			name: "South Africa",
			startOfConflict: 54490
		},
		'SSD': {
			fillKey: "0",
			name: "South Sudan",
			startOfConflict: 12340
		},
		'ESP': {
			fillKey: "2",
			name: "Spain",
			startOfConflict: 46122
		},
		'LKA': {
			fillKey: "1",
			name: "Sri Lanka",
			startOfConflict: 20715
		},
		'PSE': {
			fillKey: "0",
			name: "Palestine, State of",
			startOfConflict: 4668
		},
		'SDN': {
			fillKey: "2",
			name: "Sudan",
			startOfConflict: 40235
		},
		'SUR': {
			fillKey: "0",
			name: "Suriname",
			startOfConflict: 543
		},
		'SWZ': {
			fillKey: "0",
			name: "Swaziland",
			startOfConflict: 1287
		},
		'SWE': {
			fillKey: "0",
			name: "Sweden",
			startOfConflict: 9779
		},
		'CHE': {
			fillKey: "0",
			name: "Switzerland",
			startOfConflict: 8299
		},
		'SYR': {
			fillKey: "0",
			name: "Syrian Arab Republic",
			startOfConflict: 18502
		},
		'TJK': {
			fillKey: "0",
			name: "Tajikistan",
			startOfConflict: 8482
		},
		'MKD': {
			fillKey: "0",
			name: "Macedonia, the former Yugoslav Republic of",
			startOfConflict: 2078
		},
		'THA': {
			fillKey: "3",
			name: "Thailand",
			startOfConflict: 67959
		},
		'TLS': {
			fillKey: "0",
			name: "Timor - Leste",
			startOfConflict: 1185
		},
		'TGO': {
			fillKey: "0",
			name: "Togo",
			startOfConflict: 7305
		},
		'TKL': {
			fillKey: "0",
			name: "Tokelau",
			startOfConflict: 1
		},
		'TON': {
			fillKey: "0",
			name: "Tonga",
			startOfConflict: 106
		},
		'TTO': {
			fillKey: "0",
			name: "Trinidad and Tobago",
			startOfConflict: 1360
		},
		'TUN': {
			fillKey: "0",
			name: "Tunisia",
			startOfConflict: 11254
		},
		'TUR': {
			fillKey: "3",
			name: "Turkey",
			startOfConflict: 78666
		},
		'TKM': {
			fillKey: "0",
			name: "Turkmenistan",
			startOfConflict: 5374
		},
		'TCA': {
			fillKey: "0",
			name: "Turks and Caicos Islands",
			startOfConflict: 34
		},
		'TUV': {
			fillKey: "0",
			name: "Tuvalu",
			startOfConflict: 10
		},
		'UGA': {
			fillKey: "1",
			name: "Uganda",
			startOfConflict: 39032
		},
		'UKR': {
			fillKey: "2",
			name: "Ukraine",
			startOfConflict: 44824
		},
		'ARE': {
			fillKey: "0",
			name: "United Arab Emirates",
			startOfConflict: 9157
		},
		'GBR': {
			fillKey: "3",
			name: "United Kingdom",
			startOfConflict: 64716
		},
		'TZA': {
			fillKey: "2",
			name: "Tanzania, United Republic of",
			startOfConflict: 53470
		},
		'USA': {
			fillKey: "8",
			name: "United States",
			startOfConflict: 321774
		},
		'VIR': {
			fillKey: "0",
			name: "Virgin Islands, U.S.",
			startOfConflict: 106
		},
		'URY': {
			fillKey: "0",
			name: "Uruguay",
			startOfConflict: 3432
		},
		'UZB': {
			fillKey: "1",
			name: "Uzbekistan",
			startOfConflict: 29893
		},
		'VUT': {
			fillKey: "0",
			name: "Vanuatu",
			startOfConflict: 265
		},
		'VEN': {
			fillKey: "1",
			name: "Venezuela, Bolivarian Republic of",
			startOfConflict: 31108
		},
		'VNM': {
			fillKey: "4",
			name: "Viet Nam",
			startOfConflict: 93448
		},
		'WLF': {
			fillKey: "0",
			name: "Wallis and Futuna",
			startOfConflict: 13
		},
		'ESH': {
			fillKey: "0",
			name: "Western Sahara",
			startOfConflict: 573
		},
		'YEM': {
			fillKey: "1",
			name: "Yemen",
			startOfConflict: 26832
		},
		'ZMB': {
			fillKey: "0",
			name: "Zambia",
			startOfConflict: 16212
		},
		'ZWE': {
			fillKey: "0",
			name: "Zimbabwe",
			startOfConflict: 15603
		}
	}
});
map.legend({
	legendTitle: "Population (in millions)", 
	labels: { 
		0: "< 20", 
		1: "20 - 40",
		2: "40 - 60",
		3: "60 - 80",
		4: "80 - 100",
		5: "100 - 120",
		6: "120 - 140",
		7: "140 - 160",
		8: "> 160"
	}
});