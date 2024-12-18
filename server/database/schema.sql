create table plane(
  id int unsigned primary key auto_increment not null,
  brand varchar(100) not null,
  model varchar(100) not null,
  capacity int not null,
  autonomy int not null,
  speed int not null,
  luggages int not null,
  image text not null
);



insert into plane(brand, model, capacity, autonomy, speed, luggages, image)
values
  ("Gulfstream", "G650", 18, 13000, 982, 195, "https://aerocontact.b-cdn.net/public/img/aviaexpo/produits/images/580/detail_Gulfstream-G650ER_900x636.jpg"),
  ("Bombardier", "Global 7500", 19, 14260, 982, 195, "https://www.aerobuzz.fr/wp-content/uploads/2024/08/Global-7500-On-Ground-Side-Shot-Left.jpeg"),
  ("Dassault", "Falcon 8X", 14, 11945, 900, 140, "https://www.aeroflap.com.br/wp-content/uploads/2023/05/Dassault_Falcon8X_free_use.webp"),
  ("Embraer", "Lineage 1000E", 19, 8519, 870, 323, "https://cdn.prod.website-files.com/6479c007a0f97cbf8f3ca330/65e0cd8fa8bcfd4cd85a2857_65ca6d6b1f754cba27bf4d02_Lineage%25201000%2520EXT.webp"),
  ("Cessna", "Citation Longitude", 12, 6430, 882, 450, "https://hyper.luxe/wp-content/uploads/2022/09/longitude_notail_64c0371_8989.jpg__1200x675_q85_crop_subsampling-2_upscale.jpg"),
  ("Gulfstream", "G550", 19, 12501, 941, 226, "https://i0.wp.com/www.aerobuzz.fr/wp-content/uploads/2020/06/Gulfstream-G550.jpg?fit=1000%2C624&ssl=1"),
  ("Bombardier", "Global 6000", 17, 11112, 950, 195, "https://defense.bombardier.com/sites/missionized/files/DDBA0637_BSA_6000_16A2138_V1-share.jpg"),
  ("Dassault", "Falcon 7X", 16, 11019, 904, 140, "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dassault_Falcon_7X%2C_Proair_[…]ssault_Falcon_7X%2C_Proair_Charter_Transport_JP7526714.jpg"),
  ("Embraer","Praetor 600", 12, 7408, 863, 155, "https://jetflo.com/storage/2022/11/Praetor600_exterior-1.jpg"),
  ("Cessna", "Citation X+", 12, 6112, 978, 726, "https://www.themilliardaire.com/wp-content/uploads/2014/01/cessna-citation-x-3.jpg"),
  ("Gulfstream", "G500", 19, 9630, 982, 226, "https://assets.gulfstream.aero/thedotcom/images/aircraft/g500/d_g500_a_mkt_00060_PROD.jpg"),
  ("Bombardier", "Challenger 650", 12, 7408, 870, 115, "https://defense.bombardier.com/sites/missionized/files/styles/social_share_image/public/2020-05/WIW%20outside%20right_0_0.jpg?itok=5MG8-Usq"),
  ("Dassault", "Falcon 2000LXS", 10, 7410, 893, 140, "https://images.dassault-aviation.com/f_auto,q_auto,g_center,dpr_auto/wp-auto-upload/1/files/2022/03/DA00011345_S.jpg"),
  ("Embraer", "Legacy 650E", 14, 7223, 850, 286, "https://www.mkpartnair.com/app/uploads/MKPartnair-Fleet-Private-Jet-Embraer-Legacy-650-Heavy-Jet-Exterior-1-scaled.jpg"),
  ("Cessna", "Citation Sovereign+", 12, 5374, 848, 725, "https://blog.privatejetfinder.com/wp-content/uploads/2024/05/Cessna-Citation-Sovereign.jpg"),
  ("Gulfstream", "G280", 10, 6667, 900, 120, "https://globaljet.aero/sites/default/files/2021-01/Gulfstream%20280%20Exterior.jpg"),
  ("Bombardier", "Learjet 75 Liberty", 9, 3789, 861, 65, "https://jetflo.com/storage/2022/11/LJ75_exterior.jpg"),
  ("Dassault", "Falcon 900LX", 14, 8889, 950, 127, "https://images.dassault-aviation.com/w_2000,f_auto,q_auto,g_center,dpr_auto,c_fill/wp-auto-upload/1/files/2022/03/DA00012401_S.jpg"),
  ("Embraer", "Phenom 300E", 11, 3700, 859, 74, "https://globaljet.aero/sites/default/files/2021-01/Embraer%20Phenm%20300%20Exterior.jpg"),
  ("Cessna", "Citation CJ4", 10, 3708, 835, 770, "https://cdn.flightsim.to/images/20/cessna-citation-cj4-n347cz-yaLJg.jpg?width=800");