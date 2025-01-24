CREATE TABLE airports(
id int unsigned primary key auto_increment not null,
size varchar(50) not null,
name varchar(100) not null,
latitude DECIMAL(16,14) not null,
longitude DECIMAL(16,14) not null,
isocountry varchar(25) not null,
isoregion varchar(25) not null,
municipality varchar(50) not null
);
INSERT INTO airports (size, name, latitude, longitude, isocountry, isoregion, municipality) 
values 
("large_airport","Helsinki Vantaa Airport",60.318363,24.963341,"Finland","FI-18","Helsinki"),
("medium_airport","Helsinki East-Redstone Aerodrome",60.479167,26.593889,"Finland","FI-09","Helsinki"),
("medium_airport","Aubenas-Ardèche Méridional Airport",44.544203,4.372192,"France","FR-ARA","Aubenas/Ardèche Méridional"),
("medium_airport","Le Puy-Loudes Airfield",45.0807,3.76289,"France","FR-ARA","Chaspuzac, Haute-Loire"),
("medium_airport","Chambéry Savoie Mont Blanc Airport",45.6381,5.88023,"France","FR-ARA","Viviers-du-Lac"),
("medium_airport","Clermont-Ferrand Auvergne Airport",45.786701,3.16917,"France","FR-ARA","Aulnat, Puy-de-Dôme"),
("medium_airport","Annemasse Airfield",46.192001, 6.26839,"France","FR-ARA","Annemasse"),
("large_airport","Lyon Saint-Exupéry Airport",45.725996, 5.090139,"France","FR-ARA","Colombier-Saugnieu, Rhône"),
("medium_airport","Roanne-Renaison Airport",46.053818, 3.999023,"France","FR-ARA","Saint-Léger-sur-Roanne"),
("medium_airport","Annecy Haute-Savoie Mont Blanc Airport",45.928947, 6.0987,"France","FR-ARA","Epagny Metz-Tessy"),
("medium_airport","Grenoble Alpes Isère Airport",45.3629, 5.32937,"France","FR-ARA","Saint-Etienne-de-Saint-Geoirs, Isère"),
("medium_airport","Valence-Chabeuil Airport",44.9216, 4.9699,"France","FR-ARA","Chabeuil, Drôme"),
("medium_airport","Vichy-Charmeil Airport",46.16969, 3.403637,"France","FR-ARA","Charmeil, Allier"),
("medium_airport","Aurillac Airport",44.89139938354492, 2.4219400882720947,"France","FR-ARA","Aurillac"),
("medium_airport","Lyon Bron Airport",45.727947, 4.943991,"France","FR-ARA","Chassieu, Lyon"),
("medium_airport","Le Luc-Le Cannet Airfield",43.384701, 6.38714,"France","FR-PAC","Le Cannet-des-Maures, Var"),
("medium_airport","Cannes-Mandelieu Airport",43.547998, 6.955176,"France","FR-PAC","Cannes, Alpes-Maritimes"),
("medium_airport","Saint-Etienne-Bouthéon Airport",45.5406, 4.29639,"France","FR-ARA","Saint-Etienne/Bouthéon"),
("large_airport","Marseille Provence Airport",43.438088, 5.2125,"France","FR-PAC","Marignane, Bouches-du-Rhône"),
("large_airport","Nice-Côte d'Azur Airport",43.658401, 7.21587,"France","FR-PAC","Nice, Alpes-Maritimes"),
("medium_airport","Le Castellet Airport",43.252499, 5.78519,"France","FR-PAC","Le Castellet, Var"),
("medium_airport","Avignon-Caumont Airport",43.907299,4.90183,"France","FR-PAC","Avignon, Vaucluse"),
("medium_airport","Paris-Le Bourget Airport",48.969398, 2.44139,"France","FR-IDF","Paris (Le Bourget, Seine-Saint-Denis)"),
("large_airport","Charles de Gaulle International Airport",49.012798,2.55,"France","FR-IDF","Paris (Roissy-en-France, Val-d'Oise)"),
("medium_airport","Melun-Villaroche Airfield",48.604698, 2.67112,"France","FR-IDF","Moissy-Cramayel, Seine-et-Marne"),
("medium_airport","Toussus-le-Noble Airport",48.7519,2.10619,"France","FR-IDF","Toussus-le-Noble, Yvelines"),
("large_airport","Paris-Orly Airport",48.72333,2.37944,"France","FR-IDF","Paris (Orly, Val-de-Marne)"),
("medium_airport","Pontoise-Cormeilles Aerodrome",49.096064,2.035543,"France","FR-IDF","Cormeilles-en-Vexin, Val-d'Oise"),
("medium_airport","Toulon-Hyères Airport",43.097301, 6.14603,"France","FR-PAC","Hyères, Var"),
("large_airport","Vienna International Airport",48.110298,16.5697,"Autriche","AT-9","Vienna"),
("large_airport","Geneva Cointrin International Airport",46.238098,6.10895,"Suisse","CH-GE","Geneva"),
("medium_airport","Dübendorf Air Base",47.398602,8.64823,"Suisse","CH-ZH","Zurich"),
("large_airport","Zürich Airport",47.458056,8.548056,"Suisse","CH-ZH","Zurich"),
("large_airport","Amsterdam Airport Schiphol",52.308601,4.76389,"Pays-Bas","NL-NH","Amsterdam"),
("medium_airport","Antwerp International Airport (Deurne)",51.190667,4.463153,"Belgique","BE-VAN","Antwerp"),
("medium_airport","Brussels South Charleroi Airport",50.460982,4.457158,"Belgique","BE-WHT","Charleroi"),
("large_airport","Helsinki Vantaa Airport",60.318363,24.963341,"Finland","FI-18","Helsinki"),
("medium_airport","Helsinki East-Redstone Aerodrome",60.479167,26.593889,"Finland","FI-09","Helsinki"),
("large_airport","Faro Airport",37.0144004822,-7.96590995789,"Portugal","PT-08","Faro"),
("large_airport","Francisco de Sà Carneiro Airport",41.2481002808,-8.68138980865,"Portugal","PT-13","Porto"),
("large_airport","Humberto Delgado Airport (Lisbon Portela Airport)",38.7813,-9.13592,"Portugal","PT-11","Lisbon"),
("large_airport","Manchester Airport",53.349375,-2.279521,"Royaume-Uni","GB-ENG","Manchester, Greater Manchester"),
("medium_airport","Bristol Airport",51.382702,-2.71909,"Royaume-Uni","GB-ENG","Bristol"),
("medium_airport","Liverpool John Lennon Airport",53.333599,-2.84972, "Royaume-Uni","GB-ENG","Liverpool"),
("medium_airport","Southampton Airport",50.950298,-1.3568,"Royaume-Uni","GB-ENG","Southampton"),
("medium_airport","Brighton City Airport",50.835602,-0.297222,"Royaume-Uni","GB-ENG","Brighton, East Sussex"),
("medium_airport","London Biggin Hill Airport",51.33079910279999,0.0324999988079,"Royaume-Uni","GB-ENG","London"),
("medium_airport","London City Airport",51.505299,0.055278,"Royaume-Uni","GB-ENG","London"),
("large_airport","London Heathrow Airport",51.4706,-0.461941,"Royaume-Uni","GB-ENG","London"),
("medium_airport","Newcastle International Airport",55.037958,-1.689577,"Royaume-Uni","GB-ENG","Newcastle upon Tyne, Tyne and Wear"),
("large_airport","London Stansted Airport",51.884998,0.235,"Royaume-Uni","GB-ENG","London"),
("medium_airport","RAF Northolt",51.553001,-0.418167,"Royaume-Uni","GB-ENG","London"),
("large_airport","Hamburg Helmut Schmidt Airport",53.630402,9.98823,"Allemagne","DE-HH","Hamburg"),
("large_airport","Düsseldorf Airport",51.289501,6.76678,"Allemagne","DE-NW","Düsseldorf"),
("large_airport","Munich Airport",48.353802,11.7861,"Allemagne","DE-BY","Munich"),
("large_airport","Stuttgart Airport",48.689899,9.22196,"Allemagne","DE-BW","Stuttgart"),
("medium_airport","Mannheim-City Airport",49.473057,8.514167,"Allemagne","DE-BW","Mannheim"),
("medium_airport","Hamburg-Finkenwerder Airport",53.5352783203125,9.835556030273438,"Allemagne","DE-HH","Hamburg"),
("medium_airport","Weeze Airport",51.6024017334,6.14216995239,"Allemagne","DE-NW","Weeze"),
("medium_airport","Dortmund Airport",51.518299,7.61224,"Allemagne","DE-NW","Dortmund"),
("large_airport","Tenerife Sur Airport",28.0445,-16.5725, "Espagne","ES-CN","Tenerife"),
("medium_airport","Tenerife Norte-Ciudad de La Laguna Airport",28.4827,-16.341499,"Espagne","ES-CN","Tenerife"),
("large_airport","Alicante-Elche Miguel HernÃ¡ndez Airport",38.2822,-0.558156,"Espagne","ES-VC","Alicante"),
("medium_airport","Burgos Airport",42.357601,-3.62076,"Espagne","ES-CL","Burgos"),
("large_airport","Josep Tarradellas Barcelona-El Prat Airport",41.2971,2.07846,"Espagne","ES-CT","Barcelona"),
("medium_airport","Madrid-Cuatro Vientos Airport",40.370701,-3.78514,"Espagne","ES-MD","Madrid"),
("large_airport","Adolfo Suàrez Madridà Barajas Airport",40.471926,-3.56264,"Espagne","ES-MD","Madrid"),
("medium_airport","Madridà Torrejon Airport / Torrejon Air Base",40.487875,-3.456808,"Espagne","ES-MD","Madrid"),
("medium_airport","Sevilla Airport",37.417999,-5.89311,"Espagne","ES-AN","Sevilla"),
("medium_airport","Levashovo Air Base",60.0867,30.1933,"Russie","RU-SPE","St. Petersburg"),
("large_airport","Pulkovo Airport",59.800301,30.262501,"Russie","RU-SPE","St. Petersburg"),
("medium_airport","Pushkin Airport",59.685001,30.338301,"Russie","RU-SPE","St. Petersburg"),
("medium_airport","Myachkovo Airfield",55.560001,37.985001,"Russie","RU-MOS","Moscow"),
("large_airport","Zhukovsky International Airport",55.553299,38.150002,"Russie","RU-MOS","Moscow"),
("large_airport","Domodedovo International Airport",55.408798,37.9063,"Russie","RU-MOS","Moscow"),
("large_airport","Sheremetyevo International Airport",55.972599,37.4146, "Russie","RU-MOS","Moscow"),
("medium_airport","Ostafyevo International Airport",55.511667,37.507222,"Russie","RU-MOS","Moscow"),
("medium_airport","Chkalovskiy Air Base",55.8783,38.061699,"Russie","RU-MOS","Moscow"),
("large_airport","Vnukovo International Airport",55.591499,37.261501,"Russie","RU-MOW","Moscow"),
("large_airport","Falconeà Borsellino Airport",38.175999,13.091,"Italie","IT-82","Palermo"),
("medium_airport","Palermo-Boccadifalco Airport",38.110802,13.3133,"Italie","IT-82","Palermo"),
("medium_airport","Torino-Aeritalia Airport",45.086399,7.60337,"Italie","IT-21","Torino (TO)"),
("large_airport","Bologna Guglielmo Marconi Airport",44.5354,11.2887,"Italie","IT-45","Bologna"),
("large_airport","Venice Marco Polo Airport",45.505299,12.3519,"Italie","IT-34","Venezia (VE)"),
("medium_airport","Ciampinoà G. B. Pastine International Airport",41.7994,12.5949,"Italie","IT-62","Rome"),
("large_airport","RomeàFiumicino Leonardo da Vinci International Airport",41.804532,12.251998,"Italie","IT-62","Rome"),
("large_airport","Naples International Airport",40.886002,14.2908,"Italie","IT-72","Napoli"),
("medium_airport","Florence Airport, Peretola",43.808558,11.202822,"Italie","IT-52","Firenze (FI)"),
("medium_airport","Rome Urbe Airport",41.952096,12.502231,"Italie","IT-62","Rome");

CREATE TABLE plane(
  id int unsigned primary key auto_increment not null,
  brand varchar(100) not null,
  model varchar(100) not null,
  capacity int not null,
  autonomy int not null,
  speed int not null,
  luggages int not null,
  image text not null,
  airport_id int unsigned not null,
  foreign key (airport_id) references airports(id),
  cabine varchar(3)
);

INSERT INTO plane(brand, model, capacity, autonomy, speed, luggages, image, airport_id, cabine)
values
("Gulfstream", "G650", 18, 13000, 982, 195, "https://aerocontact.b-cdn.net/public/img/aviaexpo/produits/images/580/detail_Gulfstream-G650ER_900x636.jpg", 6,"CLC"),
("Bombardier", "Global 7500", 19, 14260, 982, 195, "https://www.aerobuzz.fr/wp-content/uploads/2024/08/Global-7500-On-Ground-Side-Shot-Left.jpeg",20,"CGC"),
("Dassault", "Falcon 8X", 14, 11945, 900, 140, "https://www.aeroflap.com.br/wp-content/uploads/2023/05/Dassault_Falcon8X_free_use.webp",18,"CSM"),
("Embraer", "Lineage 1000E", 19, 8519, 870, 323, "https://cdn.prod.website-files.com/6479c007a0f97cbf8f3ca330/65e0cd8fa8bcfd4cd85a2857_65ca6d6b1f754cba27bf4d02_Lineage%25201000%2520EXT.webp",24,"CLC"),
("Cessna", "Citation Longitude", 12, 6430, 882, 450, "https://hyper.luxe/wp-content/uploads/2022/09/longitude_notail_64c0371_8989.jpg__1200x675_q85_crop_subsampling-2_upscale.jpg",8,"CGC"),
("Gulfstream", "G550", 19, 12501, 941, 226, "https://i0.wp.com/www.aerobuzz.fr/wp-content/uploads/2020/06/Gulfstream-G550.jpg?fit=1000%2C624&ssl=1",28,"CSM"),
("Bombardier", "Global 6000", 17, 11112, 950, 195, "https://defense.bombardier.com/sites/missionized/files/DDBA0637_BSA_6000_16A2138_V1-share.jpg",23,"CLC"),
("Dassault", "Falcon 7X", 16, 11019, 904, 140, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dassault_Falcon_7X%2C_Proair_Charter_Transport_JP7526714.jpg/640px-Dassault_Falcon_7X%2C_Proair_Charter_Transport_JP7526714.jpg",11,"CGC"),
("Embraer","Praetor 600", 12, 7408, 863, 155, "https://jetflo.com/storage/2022/11/Praetor600_exterior-1.jpg",17,"CSM"),
("Cessna", "Citation X+", 12, 6112, 978, 726, "https://www.themilliardaire.com/wp-content/uploads/2014/01/cessna-citation-x-3.jpg",15,"CSM"),
("Gulfstream", "G500", 19, 9630, 982, 226, "https://assets.gulfstream.aero/thedotcom/images/aircraft/g500/d_g500_a_mkt_00060_PROD.jpg",19,"CLC"),
("Bombardier", "Challenger 650", 12, 7408, 870, 115, "https://defense.bombardier.com/sites/missionized/files/styles/social_share_image/public/2020-05/WIW%20outside%20right_0_0.jpg?itok=5MG8-Usq",20,"CGC"),
("Dassault", "Falcon 2000LXS", 10, 7410, 893, 140, "https://images.dassault-aviation.com/f_auto,q_auto,g_center,dpr_auto/wp-auto-upload/1/files/2022/03/DA00011345_S.jpg",23,"CSM"),
("Embraer", "Legacy 650E", 14, 7223, 850, 286, "https://www.mkpartnair.com/app/uploads/MKPartnair-Fleet-Private-Jet-Embraer-Legacy-650-Heavy-Jet-Exterior-1-scaled.jpg",24,"CSM"),
("Cessna", "Citation Sovereign+", 12, 5374, 848, 725, "https://blog.privatejetfinder.com/wp-content/uploads/2024/05/Cessna-Citation-Sovereign.jpg",8,"CLC"),
("Gulfstream", "G280", 10, 6667, 900, 120, "https://globaljet.aero/sites/default/files/2021-01/Gulfstream%20280%20Exterior.jpg",19,"CGC"),
("Bombardier", "Learjet 75 Liberty", 9, 3789, 861, 65, "https://jetflo.com/storage/2022/11/LJ75_exterior.jpg",23,"CSM"),
("Dassault", "Falcon 900LX", 14, 8889, 950, 127, "https://images.dassault-aviation.com/w_2000,f_auto,q_auto,g_center,dpr_auto,c_fill/wp-auto-upload/1/files/2022/03/DA00012401_S.jpg",17,"CSM"),
("Embraer", "Phenom 300E", 11, 3700, 859, 74, "https://globaljet.aero/sites/default/files/2021-01/Embraer%20Phenm%20300%20Exterior.jpg",15,"CLC"),
("Cessna", "Citation CJ4", 10, 3708, 835, 770, "https://cdn.flightsim.to/images/20/cessna-citation-cj4-n347cz-yaLJg.jpg?width=800",24,"CGC"),
("Gulfstream", "G700", 19, 13890, 982, 220, "https://i0.wp.com/www.aerobuzz.fr/wp-content/uploads/2024/04/G700-en-vol-montagne.jpg?fit=800%2C546&ssl=1",15,"CSM"),
("Bombardier", "Global 8000", 19, 14631, 982, 235, "https://cdn.prod.website-files.com/6479c007a0f97cbf8f3ca330/65e0cd8d1d0c345e0f89dba5_65ca67ba6f3c0fb91b218369_Global-8000%2520EXT.webp",8,"CLC"),
("Dassault", "Falcon 10X", 19, 13890, 970, 175,"https://i.f1g.fr/media/eidos/orig/2021/05/06/XVM658f59fa-ae75-11eb-96fa-78334c940b20.jpg",28,"CSM"),
("Embraer", "Praetor 500", 9, 6019,863, 135, "https://aeroaffaires.fr/wp-content/uploads/2019/07/praetor-500-i-aeroaffaires-e1564659460334.jpg",18,"CGC"),
("Cessna", "Citation M2", 7, 2871, 748, 50, "https://cessna.txtav.com/-/media/cessna/images/aircraft/jets/m2-gen3/exterior-gallery/m2-gen3-exterior-1.ashx",8,"CLC"),
("HondaJet", "Elite II", 6, 2865, 782, 65, "https://www.aeroflap.com.br/wp-content/uploads/2024/08/Hondajet-Elite-II-free-use.jpg",73,"CSM"),
("Piaggio", "Avanti Evo", 9, 2700, 732, 175,"https://www.shutterstock.com/image-photo/balikpapan-borneo-indonesia-24-april-600nw-1326523718.jpg",23,"CSM"),
("Beechcraft", "Premier 1A", 6, 2778, 863, 100, "https://aircharterservice-globalcontent-live.cphostaccess.com/images/aircraft-guide-images/private/beechcraft-premier-ii-main_tcm36-4524.jpg",19,"CLC"),
("Pilatus", "PC-24", 9, 3610, 815, 200, "https://aerocontact.b-cdn.net/public/img/aviaexpo/produits/images/87/detail_pilatus-pc-24_900x636.jpg",24,"CGC"),
("Learjet", "85", 8, 5556, 870, 150, "https://aeroaffaires.fr/wp-content/uploads/2018/08/learjet_85_large_croped.jpg",18,"CSM");

CREATE TABLE cabine(
  code  varchar(3) primary key not null,
  libelle varchar(50) not null,
  photo varchar(150) not null,
  plan  varchar(150) not null
);

INSERT INTO cabine(code,libelle,photo,plan)
values
  ("CLC", "Cabine Long Courier", "https://www.avico.com/wp-content/uploads/2022/03/034-falcon8x-2018usb55-a4-hd-scaled-e1646847361884-1641x750.jpg", "https://www.mkpartnair.com/app/uploads/Jetplane-Vue-du-haut-vertical-8-2.png"),
  ("CGC", "Grande Cabine", "https://www.themilliardaire.com/wp-content/uploads/2019/11/Gulfstream-G700-Divan-1024x683.png", "https://www.mkpartnair.com/app/uploads/Jetplane-Vue-du-haut-vertical-8-2.png"),
  ("CSM", "Cabine Super Moyenne", "https://www.themilliardaire.com/wp-content/uploads/2019/11/Gulfstream-G700-Six-Place-Dining-1024x683.png", "https://www.mkpartnair.com/app/uploads/Jetplane-Vue-du-haut-vertical-8-2.png");

CREATE TABLE prestation(
  code varchar(5) primary key  not null,
  libelle varchar(30) not null,
  prestation varchar(3),
  foreign key (prestation) references cabine(code)
);  

INSERT INTO prestation(code,libelle,prestation)
values
  ("SCCLC", "Siege Cuir", "CLC"),
  ("SCCGC", "Siege Cuir", "CGC"),
  ("SCCSM", "Siege Cuir", "CSM"),
  ("BACLC", "Bar", "CLC"),
  ("BACGC", "Bar", "CGC"),
  ("BACSM", "Bar", "CSM"),
  ("CICLC", "Cinema", "CLC"),
  ("CICGC", "Cinema", "CGC"),
  ("CICSM", "Cinema", "CSM"),
  ("RECLC", "Restauration", "CLC"),
  ("BTCLC", "Salle de Conference", "CLC"),
  ("BTCGC", "Salle de Jeux", "CGC");
  




CREATE TABLE user(
  id int primary key auto_increment not null,
  firstname varchar(100) not null,
  lastname varchar(100) not null,
  age int not null,
  mail varchar(100) not null,
  phone_number int not null,
  password varchar(255) not null
);

