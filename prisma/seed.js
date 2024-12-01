const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Seed Voices
  await prisma.voices.create({
    data: {
      voice_id: 1109,
      user_id: 11,
      username: "user11",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "Birmingham",
      amplifiers_count: 13,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1110,
      user_id: 16,
      username: "user16",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "Glasgow",
      amplifiers_count: 2,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1111,
      user_id: 46,
      username: "user46",
      content: "I can't believe how unfair the Driving situation has become!",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 2,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1112,
      user_id: 34,
      username: "user34",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "Birmingham",
      amplifiers_count: 0,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1113,
      user_id: 18,
      username: "user18",
      content: "Driving regulations need to be reviewed immediately.",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 3,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1114,
      user_id: 5,
      username: "user5",
      content: "I can't believe how unfair the Driving situation has become!",
      category: "Driving",
      location: "Glasgow",
      amplifiers_count: 20,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1115,
      user_id: 16,
      username: "user16",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "London",
      amplifiers_count: 8,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1116,
      user_id: 9,
      username: "user9",
      content: "Parking is becoming a real issue in the UK.",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 16,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1117,
      user_id: 44,
      username: "user44",
      content: "Does anyone else feel the Parking system is broken?",
      category: "Parking",
      location: "Glasgow",
      amplifiers_count: 0,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1118,
      user_id: 17,
      username: "user17",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "London",
      amplifiers_count: 6,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1119,
      user_id: 10,
      username: "user10",
      content: "I can't believe how unfair the Driving situation has become!",
      category: "Driving",
      location: "Cardiff",
      amplifiers_count: 3,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1120,
      user_id: 23,
      username: "user23",
      content: "I can't believe how unfair the Parking situation has become!",
      category: "Parking",
      location: "Manchester",
      amplifiers_count: 18,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1121,
      user_id: 37,
      username: "user37",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "Glasgow",
      amplifiers_count: 10,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1122,
      user_id: 17,
      username: "user17",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "London",
      amplifiers_count: 2,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1123,
      user_id: 30,
      username: "user30",
      content: "Does anyone else feel the Parking system is broken?",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 15,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1124,
      user_id: 21,
      username: "user21",
      content: "What's everyone doing about Fines fines?",
      category: "Fines",
      location: "London",
      amplifiers_count: 19,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1125,
      user_id: 26,
      username: "user26",
      content: "What's everyone doing about Driving fines?",
      category: "Driving",
      location: "London",
      amplifiers_count: 18,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1126,
      user_id: 13,
      username: "user13",
      content: "I can't believe how unfair the Parking situation has become!",
      category: "Parking",
      location: "Birmingham",
      amplifiers_count: 5,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1127,
      user_id: 47,
      username: "user47",
      content: "Parking is becoming a real issue in the UK.",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 19,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1128,
      user_id: 12,
      username: "user12",
      content: "I can't believe how unfair the Driving situation has become!",
      category: "Driving",
      location: "Cardiff",
      amplifiers_count: 18,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1129,
      user_id: 44,
      username: "user44",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "London",
      amplifiers_count: 16,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1130,
      user_id: 32,
      username: "user32",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "Glasgow",
      amplifiers_count: 2,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1131,
      user_id: 6,
      username: "user6",
      content: "Fines regulations need to be reviewed immediately.",
      category: "Fines",
      location: "Birmingham",
      amplifiers_count: 2,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1132,
      user_id: 5,
      username: "user5",
      content: "I can't believe how unfair the Parking situation has become!",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 9,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1133,
      user_id: 37,
      username: "user37",
      content: "Driving regulations need to be reviewed immediately.",
      category: "Driving",
      location: "London",
      amplifiers_count: 1,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1134,
      user_id: 25,
      username: "user25",
      content: "What's everyone doing about Driving fines?",
      category: "Driving",
      location: "Glasgow",
      amplifiers_count: 18,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1135,
      user_id: 20,
      username: "user20",
      content: "Driving regulations need to be reviewed immediately.",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 2,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1136,
      user_id: 5,
      username: "user5",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "Birmingham",
      amplifiers_count: 20,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1137,
      user_id: 31,
      username: "user31",
      content: "Does anyone else feel the Fines system is broken?",
      category: "Fines",
      location: "London",
      amplifiers_count: 19,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1138,
      user_id: 47,
      username: "user47",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "London",
      amplifiers_count: 19,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1139,
      user_id: 30,
      username: "user30",
      content: "I can't believe how unfair the Driving situation has become!",
      category: "Driving",
      location: "Birmingham",
      amplifiers_count: 0,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1140,
      user_id: 38,
      username: "user38",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "Birmingham",
      amplifiers_count: 20,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1141,
      user_id: 40,
      username: "user40",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "Glasgow",
      amplifiers_count: 19,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1142,
      user_id: 19,
      username: "user19",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "Birmingham",
      amplifiers_count: 19,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1143,
      user_id: 13,
      username: "user13",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "Leeds",
      amplifiers_count: 15,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1144,
      user_id: 34,
      username: "user34",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "Glasgow",
      amplifiers_count: 8,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1145,
      user_id: 46,
      username: "user46",
      content: "What's everyone doing about Driving fines?",
      category: "Driving",
      location: "London",
      amplifiers_count: 9,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1146,
      user_id: 27,
      username: "user27",
      content: "Does anyone else feel the Fines system is broken?",
      category: "Fines",
      location: "Manchester",
      amplifiers_count: 9,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1147,
      user_id: 43,
      username: "user43",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 12,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1148,
      user_id: 34,
      username: "user34",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "London",
      amplifiers_count: 7,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1149,
      user_id: 15,
      username: "user15",
      content: "Fines regulations need to be reviewed immediately.",
      category: "Fines",
      location: "Leeds",
      amplifiers_count: 3,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1150,
      user_id: 9,
      username: "user9",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 15,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1151,
      user_id: 42,
      username: "user42",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "Leeds",
      amplifiers_count: 0,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1152,
      user_id: 27,
      username: "user27",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "Leeds",
      amplifiers_count: 7,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1153,
      user_id: 24,
      username: "user24",
      content: "Does anyone else feel the Parking system is broken?",
      category: "Parking",
      location: "Manchester",
      amplifiers_count: 3,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1154,
      user_id: 44,
      username: "user44",
      content: "What's everyone doing about Driving fines?",
      category: "Driving",
      location: "Leeds",
      amplifiers_count: 11,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1155,
      user_id: 33,
      username: "user33",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "London",
      amplifiers_count: 3,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1156,
      user_id: 34,
      username: "user34",
      content: "Fines regulations need to be reviewed immediately.",
      category: "Fines",
      location: "Leeds",
      amplifiers_count: 14,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1157,
      user_id: 16,
      username: "user16",
      content: "Does anyone else feel the Fines system is broken?",
      category: "Fines",
      location: "Cardiff",
      amplifiers_count: 12,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1158,
      user_id: 24,
      username: "user24",
      content: "What's everyone doing about Driving fines?",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 11,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1159,
      user_id: 14,
      username: "user14",
      content: "Driving regulations need to be reviewed immediately.",
      category: "Driving",
      location: "Birmingham",
      amplifiers_count: 19,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1160,
      user_id: 31,
      username: "user31",
      content: "I can't believe how unfair the Driving situation has become!",
      category: "Driving",
      location: "Birmingham",
      amplifiers_count: 2,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1161,
      user_id: 9,
      username: "user9",
      content: "What's everyone doing about Fines fines?",
      category: "Fines",
      location: "Glasgow",
      amplifiers_count: 1,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1162,
      user_id: 42,
      username: "user42",
      content: "Does anyone else feel the Fines system is broken?",
      category: "Fines",
      location: "Glasgow",
      amplifiers_count: 19,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1163,
      user_id: 34,
      username: "user34",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "Leeds",
      amplifiers_count: 6,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1164,
      user_id: 31,
      username: "user31",
      content: "Does anyone else feel the Fines system is broken?",
      category: "Fines",
      location: "Cardiff",
      amplifiers_count: 15,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1165,
      user_id: 26,
      username: "user26",
      content: "Parking is becoming a real issue in the UK.",
      category: "Parking",
      location: "London",
      amplifiers_count: 2,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1166,
      user_id: 21,
      username: "user21",
      content: "Fines is becoming a real issue in the UK.",
      category: "Fines",
      location: "London",
      amplifiers_count: 14,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1167,
      user_id: 10,
      username: "user10",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "Birmingham",
      amplifiers_count: 10,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1168,
      user_id: 22,
      username: "user22",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 10,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1169,
      user_id: 37,
      username: "user37",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 7,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1170,
      user_id: 24,
      username: "user24",
      content: "What's everyone doing about Fines fines?",
      category: "Fines",
      location: "London",
      amplifiers_count: 9,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1171,
      user_id: 17,
      username: "user17",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "London",
      amplifiers_count: 4,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1172,
      user_id: 38,
      username: "user38",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 2,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1173,
      user_id: 25,
      username: "user25",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 19,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1174,
      user_id: 46,
      username: "user46",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "Birmingham",
      amplifiers_count: 11,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1175,
      user_id: 6,
      username: "user6",
      content: "I can't believe how unfair the Parking situation has become!",
      category: "Parking",
      location: "Birmingham",
      amplifiers_count: 16,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1176,
      user_id: 24,
      username: "user24",
      content: "What's everyone doing about Fines fines?",
      category: "Fines",
      location: "Manchester",
      amplifiers_count: 16,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1177,
      user_id: 45,
      username: "user45",
      content: "Fines regulations need to be reviewed immediately.",
      category: "Fines",
      location: "Leeds",
      amplifiers_count: 19,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1178,
      user_id: 36,
      username: "user36",
      content: "What's everyone doing about Fines fines?",
      category: "Fines",
      location: "Birmingham",
      amplifiers_count: 1,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1179,
      user_id: 39,
      username: "user39",
      content: "Does anyone else feel the Fines system is broken?",
      category: "Fines",
      location: "London",
      amplifiers_count: 19,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1180,
      user_id: 25,
      username: "user25",
      content: "I can't believe how unfair the Driving situation has become!",
      category: "Driving",
      location: "Birmingham",
      amplifiers_count: 10,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1181,
      user_id: 11,
      username: "user11",
      content: "Fines is becoming a real issue in the UK.",
      category: "Fines",
      location: "Manchester",
      amplifiers_count: 0,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1182,
      user_id: 44,
      username: "user44",
      content: "What's everyone doing about Driving fines?",
      category: "Driving",
      location: "Glasgow",
      amplifiers_count: 10,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1183,
      user_id: 10,
      username: "user10",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "London",
      amplifiers_count: 11,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1184,
      user_id: 16,
      username: "user16",
      content: "What's everyone doing about Fines fines?",
      category: "Fines",
      location: "Cardiff",
      amplifiers_count: 4,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1185,
      user_id: 34,
      username: "user34",
      content: "I can't believe how unfair the Driving situation has become!",
      category: "Driving",
      location: "London",
      amplifiers_count: 4,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1186,
      user_id: 23,
      username: "user23",
      content: "What's everyone doing about Driving fines?",
      category: "Driving",
      location: "Cardiff",
      amplifiers_count: 18,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1187,
      user_id: 36,
      username: "user36",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "London",
      amplifiers_count: 1,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1188,
      user_id: 20,
      username: "user20",
      content: "What's everyone doing about Fines fines?",
      category: "Fines",
      location: "Manchester",
      amplifiers_count: 10,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1189,
      user_id: 28,
      username: "user28",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "Glasgow",
      amplifiers_count: 8,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1190,
      user_id: 22,
      username: "user22",
      content: "Fines regulations need to be reviewed immediately.",
      category: "Fines",
      location: "Manchester",
      amplifiers_count: 14,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1191,
      user_id: 40,
      username: "user40",
      content: "Does anyone else feel the Fines system is broken?",
      category: "Fines",
      location: "Glasgow",
      amplifiers_count: 18,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1192,
      user_id: 12,
      username: "user12",
      content: "What's everyone doing about Driving fines?",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 8,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1193,
      user_id: 30,
      username: "user30",
      content: "What's everyone doing about Driving fines?",
      category: "Driving",
      location: "Leeds",
      amplifiers_count: 3,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1194,
      user_id: 19,
      username: "user19",
      content: "Fines regulations need to be reviewed immediately.",
      category: "Fines",
      location: "Glasgow",
      amplifiers_count: 18,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1195,
      user_id: 42,
      username: "user42",
      content: "Does anyone else feel the Fines system is broken?",
      category: "Fines",
      location: "Manchester",
      amplifiers_count: 7,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1196,
      user_id: 46,
      username: "user46",
      content: "Driving regulations need to be reviewed immediately.",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 4,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1197,
      user_id: 41,
      username: "user41",
      content: "Does anyone else feel the Parking system is broken?",
      category: "Parking",
      location: "Glasgow",
      amplifiers_count: 6,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1198,
      user_id: 34,
      username: "user34",
      content: "Does anyone else feel the Fines system is broken?",
      category: "Fines",
      location: "Manchester",
      amplifiers_count: 12,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1199,
      user_id: 35,
      username: "user35",
      content: "Fines is becoming a real issue in the UK.",
      category: "Fines",
      location: "Manchester",
      amplifiers_count: 10,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1200,
      user_id: 27,
      username: "user27",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "Cardiff",
      amplifiers_count: 4,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1201,
      user_id: 31,
      username: "user31",
      content: "What's everyone doing about Fines fines?",
      category: "Fines",
      location: "Birmingham",
      amplifiers_count: 3,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1202,
      user_id: 47,
      username: "user47",
      content: "Fines is becoming a real issue in the UK.",
      category: "Fines",
      location: "Cardiff",
      amplifiers_count: 0,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1203,
      user_id: 12,
      username: "user12",
      content: "Fines is becoming a real issue in the UK.",
      category: "Fines",
      location: "Cardiff",
      amplifiers_count: 16,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1204,
      user_id: 7,
      username: "user7",
      content: "I can't believe how unfair the Driving situation has become!",
      category: "Driving",
      location: "Birmingham",
      amplifiers_count: 2,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1205,
      user_id: 31,
      username: "user31",
      content: "Driving regulations need to be reviewed immediately.",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 20,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1206,
      user_id: 29,
      username: "user29",
      content: "Fines is becoming a real issue in the UK.",
      category: "Fines",
      location: "Birmingham",
      amplifiers_count: 15,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1207,
      user_id: 24,
      username: "user24",
      content: "Driving regulations need to be reviewed immediately.",
      category: "Driving",
      location: "Cardiff",
      amplifiers_count: 8,
    },
  });
  await prisma.voices.create({
    data: {
      voice_id: 1208,
      user_id: 34,
      username: "user34",
      content: "Parking is becoming a real issue in the UK.",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 8,
    },
  });

  // Seed Comments
  await prisma.comments.create({
    data: {
      comment_id: 2219,
      voice_id: 1109,
      user_id: 39,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2220,
      voice_id: 1109,
      user_id: 29,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2221,
      voice_id: 1109,
      user_id: 17,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2222,
      voice_id: 1109,
      user_id: 10,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2223,
      voice_id: 1110,
      user_id: 5,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2224,
      voice_id: 1110,
      user_id: 37,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2225,
      voice_id: 1110,
      user_id: 15,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2226,
      voice_id: 1111,
      user_id: 19,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2227,
      voice_id: 1111,
      user_id: 10,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2228,
      voice_id: 1111,
      user_id: 15,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2229,
      voice_id: 1111,
      user_id: 5,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2230,
      voice_id: 1112,
      user_id: 35,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2231,
      voice_id: 1112,
      user_id: 38,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2232,
      voice_id: 1112,
      user_id: 18,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2233,
      voice_id: 1112,
      user_id: 34,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2234,
      voice_id: 1113,
      user_id: 26,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2235,
      voice_id: 1113,
      user_id: 12,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2236,
      voice_id: 1114,
      user_id: 12,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2237,
      voice_id: 1114,
      user_id: 27,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2238,
      voice_id: 1115,
      user_id: 10,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2239,
      voice_id: 1115,
      user_id: 27,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2240,
      voice_id: 1116,
      user_id: 11,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2241,
      voice_id: 1116,
      user_id: 36,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2242,
      voice_id: 1116,
      user_id: 18,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2243,
      voice_id: 1117,
      user_id: 41,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2244,
      voice_id: 1118,
      user_id: 11,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2245,
      voice_id: 1118,
      user_id: 46,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2246,
      voice_id: 1118,
      user_id: 36,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2247,
      voice_id: 1118,
      user_id: 27,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2248,
      voice_id: 1118,
      user_id: 33,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2249,
      voice_id: 1119,
      user_id: 22,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2250,
      voice_id: 1119,
      user_id: 27,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2251,
      voice_id: 1119,
      user_id: 14,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2252,
      voice_id: 1119,
      user_id: 35,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2253,
      voice_id: 1119,
      user_id: 16,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2254,
      voice_id: 1120,
      user_id: 29,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2255,
      voice_id: 1121,
      user_id: 11,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2256,
      voice_id: 1121,
      user_id: 31,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2257,
      voice_id: 1121,
      user_id: 21,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2258,
      voice_id: 1121,
      user_id: 47,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2259,
      voice_id: 1121,
      user_id: 29,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2260,
      voice_id: 1122,
      user_id: 31,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2261,
      voice_id: 1123,
      user_id: 14,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2262,
      voice_id: 1123,
      user_id: 13,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2263,
      voice_id: 1123,
      user_id: 10,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2264,
      voice_id: 1123,
      user_id: 34,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2265,
      voice_id: 1123,
      user_id: 40,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2266,
      voice_id: 1124,
      user_id: 9,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2267,
      voice_id: 1125,
      user_id: 46,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2268,
      voice_id: 1125,
      user_id: 27,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2269,
      voice_id: 1125,
      user_id: 24,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2270,
      voice_id: 1125,
      user_id: 30,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2271,
      voice_id: 1126,
      user_id: 23,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2272,
      voice_id: 1126,
      user_id: 17,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2273,
      voice_id: 1126,
      user_id: 9,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2274,
      voice_id: 1126,
      user_id: 6,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2275,
      voice_id: 1126,
      user_id: 21,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2276,
      voice_id: 1127,
      user_id: 31,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2277,
      voice_id: 1127,
      user_id: 25,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2278,
      voice_id: 1127,
      user_id: 44,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2279,
      voice_id: 1127,
      user_id: 5,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2280,
      voice_id: 1128,
      user_id: 16,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2281,
      voice_id: 1128,
      user_id: 30,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2282,
      voice_id: 1129,
      user_id: 31,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2283,
      voice_id: 1129,
      user_id: 26,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2284,
      voice_id: 1129,
      user_id: 37,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2285,
      voice_id: 1130,
      user_id: 30,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2286,
      voice_id: 1130,
      user_id: 23,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2287,
      voice_id: 1131,
      user_id: 34,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2288,
      voice_id: 1131,
      user_id: 6,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2289,
      voice_id: 1132,
      user_id: 38,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2290,
      voice_id: 1133,
      user_id: 39,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2291,
      voice_id: 1133,
      user_id: 23,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2292,
      voice_id: 1133,
      user_id: 46,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2293,
      voice_id: 1133,
      user_id: 30,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2294,
      voice_id: 1134,
      user_id: 7,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2295,
      voice_id: 1135,
      user_id: 31,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2296,
      voice_id: 1135,
      user_id: 21,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2297,
      voice_id: 1135,
      user_id: 19,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2298,
      voice_id: 1136,
      user_id: 8,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2299,
      voice_id: 1137,
      user_id: 39,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2300,
      voice_id: 1137,
      user_id: 35,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2301,
      voice_id: 1137,
      user_id: 14,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2302,
      voice_id: 1137,
      user_id: 33,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2303,
      voice_id: 1137,
      user_id: 23,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2304,
      voice_id: 1138,
      user_id: 40,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2305,
      voice_id: 1138,
      user_id: 15,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2306,
      voice_id: 1139,
      user_id: 32,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2307,
      voice_id: 1139,
      user_id: 30,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2308,
      voice_id: 1140,
      user_id: 21,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2309,
      voice_id: 1140,
      user_id: 19,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2310,
      voice_id: 1140,
      user_id: 14,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2311,
      voice_id: 1140,
      user_id: 15,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2312,
      voice_id: 1141,
      user_id: 21,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2313,
      voice_id: 1141,
      user_id: 22,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2314,
      voice_id: 1141,
      user_id: 38,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2315,
      voice_id: 1142,
      user_id: 46,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2316,
      voice_id: 1143,
      user_id: 28,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2317,
      voice_id: 1143,
      user_id: 17,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2318,
      voice_id: 1143,
      user_id: 38,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2319,
      voice_id: 1143,
      user_id: 5,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2320,
      voice_id: 1143,
      user_id: 12,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2321,
      voice_id: 1144,
      user_id: 35,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2322,
      voice_id: 1144,
      user_id: 26,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2323,
      voice_id: 1144,
      user_id: 12,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2324,
      voice_id: 1144,
      user_id: 25,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2325,
      voice_id: 1144,
      user_id: 36,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2326,
      voice_id: 1145,
      user_id: 18,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2327,
      voice_id: 1146,
      user_id: 13,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2328,
      voice_id: 1146,
      user_id: 40,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2329,
      voice_id: 1146,
      user_id: 10,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2330,
      voice_id: 1146,
      user_id: 44,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2331,
      voice_id: 1147,
      user_id: 44,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2332,
      voice_id: 1147,
      user_id: 42,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2333,
      voice_id: 1147,
      user_id: 22,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2334,
      voice_id: 1147,
      user_id: 33,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2335,
      voice_id: 1147,
      user_id: 15,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2336,
      voice_id: 1148,
      user_id: 31,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2337,
      voice_id: 1148,
      user_id: 12,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2338,
      voice_id: 1148,
      user_id: 47,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2339,
      voice_id: 1148,
      user_id: 27,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2340,
      voice_id: 1149,
      user_id: 43,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2341,
      voice_id: 1149,
      user_id: 29,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2342,
      voice_id: 1149,
      user_id: 16,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2343,
      voice_id: 1150,
      user_id: 38,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2344,
      voice_id: 1150,
      user_id: 47,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2345,
      voice_id: 1151,
      user_id: 22,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2346,
      voice_id: 1151,
      user_id: 40,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2347,
      voice_id: 1151,
      user_id: 41,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2348,
      voice_id: 1152,
      user_id: 20,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2349,
      voice_id: 1152,
      user_id: 16,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2350,
      voice_id: 1152,
      user_id: 24,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2351,
      voice_id: 1153,
      user_id: 28,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2352,
      voice_id: 1153,
      user_id: 10,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2353,
      voice_id: 1153,
      user_id: 6,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2354,
      voice_id: 1153,
      user_id: 22,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2355,
      voice_id: 1154,
      user_id: 22,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2356,
      voice_id: 1155,
      user_id: 39,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2357,
      voice_id: 1155,
      user_id: 13,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2358,
      voice_id: 1155,
      user_id: 27,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2359,
      voice_id: 1156,
      user_id: 19,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2360,
      voice_id: 1156,
      user_id: 46,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2361,
      voice_id: 1157,
      user_id: 30,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2362,
      voice_id: 1157,
      user_id: 47,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2363,
      voice_id: 1157,
      user_id: 6,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2364,
      voice_id: 1157,
      user_id: 34,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2365,
      voice_id: 1158,
      user_id: 42,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2366,
      voice_id: 1159,
      user_id: 31,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2367,
      voice_id: 1159,
      user_id: 42,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2368,
      voice_id: 1159,
      user_id: 47,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2369,
      voice_id: 1160,
      user_id: 15,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2370,
      voice_id: 1160,
      user_id: 27,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2371,
      voice_id: 1160,
      user_id: 9,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2372,
      voice_id: 1160,
      user_id: 32,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2373,
      voice_id: 1160,
      user_id: 44,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2374,
      voice_id: 1161,
      user_id: 17,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2375,
      voice_id: 1161,
      user_id: 34,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2376,
      voice_id: 1161,
      user_id: 44,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2377,
      voice_id: 1161,
      user_id: 44,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2378,
      voice_id: 1161,
      user_id: 15,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2379,
      voice_id: 1162,
      user_id: 16,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2380,
      voice_id: 1162,
      user_id: 40,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2381,
      voice_id: 1162,
      user_id: 46,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2382,
      voice_id: 1163,
      user_id: 44,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2383,
      voice_id: 1163,
      user_id: 21,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2384,
      voice_id: 1163,
      user_id: 35,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2385,
      voice_id: 1164,
      user_id: 25,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2386,
      voice_id: 1164,
      user_id: 25,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2387,
      voice_id: 1165,
      user_id: 15,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2388,
      voice_id: 1165,
      user_id: 19,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2389,
      voice_id: 1166,
      user_id: 14,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2390,
      voice_id: 1166,
      user_id: 44,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2391,
      voice_id: 1166,
      user_id: 23,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2392,
      voice_id: 1167,
      user_id: 24,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2393,
      voice_id: 1168,
      user_id: 26,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2394,
      voice_id: 1168,
      user_id: 24,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2395,
      voice_id: 1168,
      user_id: 35,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2396,
      voice_id: 1169,
      user_id: 17,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2397,
      voice_id: 1170,
      user_id: 39,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2398,
      voice_id: 1170,
      user_id: 34,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2399,
      voice_id: 1170,
      user_id: 17,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2400,
      voice_id: 1170,
      user_id: 27,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2401,
      voice_id: 1171,
      user_id: 42,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2402,
      voice_id: 1172,
      user_id: 35,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2403,
      voice_id: 1172,
      user_id: 34,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2404,
      voice_id: 1172,
      user_id: 24,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2405,
      voice_id: 1173,
      user_id: 28,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2406,
      voice_id: 1173,
      user_id: 6,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2407,
      voice_id: 1174,
      user_id: 17,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2408,
      voice_id: 1174,
      user_id: 11,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2409,
      voice_id: 1175,
      user_id: 40,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2410,
      voice_id: 1175,
      user_id: 24,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2411,
      voice_id: 1175,
      user_id: 7,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2412,
      voice_id: 1176,
      user_id: 12,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2413,
      voice_id: 1177,
      user_id: 43,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2414,
      voice_id: 1177,
      user_id: 28,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2415,
      voice_id: 1177,
      user_id: 20,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2416,
      voice_id: 1177,
      user_id: 34,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2417,
      voice_id: 1177,
      user_id: 23,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2418,
      voice_id: 1178,
      user_id: 15,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2419,
      voice_id: 1178,
      user_id: 44,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2420,
      voice_id: 1179,
      user_id: 9,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2421,
      voice_id: 1179,
      user_id: 30,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2422,
      voice_id: 1179,
      user_id: 33,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2423,
      voice_id: 1180,
      user_id: 5,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2424,
      voice_id: 1180,
      user_id: 19,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2425,
      voice_id: 1180,
      user_id: 10,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2426,
      voice_id: 1180,
      user_id: 19,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2427,
      voice_id: 1181,
      user_id: 20,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2428,
      voice_id: 1182,
      user_id: 35,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2429,
      voice_id: 1182,
      user_id: 30,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2430,
      voice_id: 1182,
      user_id: 15,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2431,
      voice_id: 1182,
      user_id: 10,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2432,
      voice_id: 1183,
      user_id: 24,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2433,
      voice_id: 1183,
      user_id: 27,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2434,
      voice_id: 1183,
      user_id: 27,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2435,
      voice_id: 1184,
      user_id: 33,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2436,
      voice_id: 1185,
      user_id: 33,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2437,
      voice_id: 1185,
      user_id: 39,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2438,
      voice_id: 1185,
      user_id: 33,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2439,
      voice_id: 1186,
      user_id: 25,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2440,
      voice_id: 1186,
      user_id: 31,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2441,
      voice_id: 1187,
      user_id: 23,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2442,
      voice_id: 1188,
      user_id: 33,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2443,
      voice_id: 1189,
      user_id: 25,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2444,
      voice_id: 1189,
      user_id: 30,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2445,
      voice_id: 1189,
      user_id: 20,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2446,
      voice_id: 1189,
      user_id: 41,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2447,
      voice_id: 1189,
      user_id: 32,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2448,
      voice_id: 1190,
      user_id: 30,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2449,
      voice_id: 1190,
      user_id: 32,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2450,
      voice_id: 1191,
      user_id: 27,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2451,
      voice_id: 1191,
      user_id: 24,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2452,
      voice_id: 1191,
      user_id: 18,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2453,
      voice_id: 1191,
      user_id: 45,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2454,
      voice_id: 1191,
      user_id: 29,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2455,
      voice_id: 1192,
      user_id: 41,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2456,
      voice_id: 1192,
      user_id: 16,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2457,
      voice_id: 1193,
      user_id: 5,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2458,
      voice_id: 1193,
      user_id: 19,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2459,
      voice_id: 1193,
      user_id: 34,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2460,
      voice_id: 1193,
      user_id: 43,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2461,
      voice_id: 1193,
      user_id: 45,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2462,
      voice_id: 1194,
      user_id: 5,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2463,
      voice_id: 1194,
      user_id: 15,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2464,
      voice_id: 1195,
      user_id: 36,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2465,
      voice_id: 1196,
      user_id: 39,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2466,
      voice_id: 1196,
      user_id: 5,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2467,
      voice_id: 1196,
      user_id: 32,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2468,
      voice_id: 1196,
      user_id: 20,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2469,
      voice_id: 1197,
      user_id: 36,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2470,
      voice_id: 1197,
      user_id: 26,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2471,
      voice_id: 1197,
      user_id: 31,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2472,
      voice_id: 1197,
      user_id: 18,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2473,
      voice_id: 1197,
      user_id: 33,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2474,
      voice_id: 1198,
      user_id: 7,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2475,
      voice_id: 1198,
      user_id: 45,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2476,
      voice_id: 1198,
      user_id: 22,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2477,
      voice_id: 1198,
      user_id: 19,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2478,
      voice_id: 1198,
      user_id: 22,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2479,
      voice_id: 1199,
      user_id: 35,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2480,
      voice_id: 1200,
      user_id: 44,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2481,
      voice_id: 1200,
      user_id: 32,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2482,
      voice_id: 1200,
      user_id: 21,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2483,
      voice_id: 1200,
      user_id: 30,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2484,
      voice_id: 1200,
      user_id: 16,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2485,
      voice_id: 1201,
      user_id: 6,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2486,
      voice_id: 1201,
      user_id: 29,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2487,
      voice_id: 1202,
      user_id: 9,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2488,
      voice_id: 1203,
      user_id: 17,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2489,
      voice_id: 1203,
      user_id: 6,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2490,
      voice_id: 1204,
      user_id: 33,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2491,
      voice_id: 1204,
      user_id: 32,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2492,
      voice_id: 1204,
      user_id: 17,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2493,
      voice_id: 1205,
      user_id: 5,
      content: "Totally agree with this!",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2494,
      voice_id: 1205,
      user_id: 33,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2495,
      voice_id: 1205,
      user_id: 10,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2496,
      voice_id: 1205,
      user_id: 19,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2497,
      voice_id: 1206,
      user_id: 12,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2498,
      voice_id: 1207,
      user_id: 23,
      content: "This needs to be addressed urgently.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2499,
      voice_id: 1207,
      user_id: 43,
      content: "This is so unfair.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2500,
      voice_id: 1208,
      user_id: 31,
      content: "Thanks for sharing your experience.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2501,
      voice_id: 1208,
      user_id: 37,
      content: "I've had a similar issue.",
    },
  });
  await prisma.comments.create({
    data: {
      comment_id: 2502,
      voice_id: 1208,
      user_id: 9,
      content: "Thanks for sharing your experience.",
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
