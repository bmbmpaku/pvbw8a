const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Seed Voices
  await prisma.voices.create({
    data: {
      user_id: 20,
      username: "user20",
      content: "Does anyone else feel the Parking system is broken?",
      category: "Parking",
      location: "Birmingham",
      amplifiers_count: 15
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 16,
      username: "user16",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "Leeds",
      amplifiers_count: 6
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 17,
      username: "user17",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "Birmingham",
      amplifiers_count: 1
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 18,
      username: "user18",
      content: "I can't believe how unfair the Driving situation has become!",
      category: "Driving",
      location: "Leeds",
      amplifiers_count: 4
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 12,
      username: "user12",
      content: "Parking is becoming a real issue in the UK.",
      category: "Parking",
      location: "Manchester",
      amplifiers_count: 5
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 8,
      username: "user8",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 7
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 10,
      username: "user10",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "London",
      amplifiers_count: 0
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 6,
      username: "user6",
      content: "Fines is becoming a real issue in the UK.",
      category: "Fines",
      location: "Manchester",
      amplifiers_count: 2
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 19,
      username: "user19",
      content: "Parking is becoming a real issue in the UK.",
      category: "Parking",
      location: "London",
      amplifiers_count: 5
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 15,
      username: "user15",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 7
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 17,
      username: "user17",
      content: "Fines regulations need to be reviewed immediately.",
      category: "Fines",
      location: "Manchester",
      amplifiers_count: 9
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 8,
      username: "user8",
      content: "Does anyone else feel the Parking system is broken?",
      category: "Parking",
      location: "London",
      amplifiers_count: 5
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 8,
      username: "user8",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "Manchester",
      amplifiers_count: 1
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 15,
      username: "user15",
      content: "Parking is becoming a real issue in the UK.",
      category: "Parking",
      location: "London",
      amplifiers_count: 8
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 7,
      username: "user7",
      content: "Does anyone else feel the Parking system is broken?",
      category: "Parking",
      location: "Glasgow",
      amplifiers_count: 12
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 17,
      username: "user17",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "London",
      amplifiers_count: 16
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 5,
      username: "user5",
      content: "Fines is becoming a real issue in the UK.",
      category: "Fines",
      location: "Glasgow",
      amplifiers_count: 15
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 7,
      username: "user7",
      content: "I can't believe how unfair the Parking situation has become!",
      category: "Parking",
      location: "Manchester",
      amplifiers_count: 18
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 13,
      username: "user13",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "Glasgow",
      amplifiers_count: 5
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 8,
      username: "user8",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "Leeds",
      amplifiers_count: 4
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 6,
      username: "user6",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 6
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 16,
      username: "user16",
      content: "Does anyone else feel the Parking system is broken?",
      category: "Parking",
      location: "London",
      amplifiers_count: 2
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 8,
      username: "user8",
      content: "I can't believe how unfair the Driving situation has become!",
      category: "Driving",
      location: "London",
      amplifiers_count: 11
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 16,
      username: "user16",
      content: "Fines regulations need to be reviewed immediately.",
      category: "Fines",
      location: "Glasgow",
      amplifiers_count: 2
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 18,
      username: "user18",
      content: "I can't believe how unfair the Parking situation has become!",
      category: "Parking",
      location: "Glasgow",
      amplifiers_count: 11
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 6,
      username: "user6",
      content: "Does anyone else feel the Fines system is broken?",
      category: "Fines",
      location: "Birmingham",
      amplifiers_count: 3
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 20,
      username: "user20",
      content: "What's everyone doing about Driving fines?",
      category: "Driving",
      location: "Birmingham",
      amplifiers_count: 15
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 12,
      username: "user12",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "Glasgow",
      amplifiers_count: 3
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 8,
      username: "user8",
      content: "What's everyone doing about Driving fines?",
      category: "Driving",
      location: "Glasgow",
      amplifiers_count: 5
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 19,
      username: "user19",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "Manchester",
      amplifiers_count: 8
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 9,
      username: "user9",
      content: "Does anyone else feel the Fines system is broken?",
      category: "Fines",
      location: "Birmingham",
      amplifiers_count: 1
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 18,
      username: "user18",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 4
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 10,
      username: "user10",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "Leeds",
      amplifiers_count: 8
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 11,
      username: "user11",
      content: "What's everyone doing about Driving fines?",
      category: "Driving",
      location: "Birmingham",
      amplifiers_count: 2
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 13,
      username: "user13",
      content: "Parking is becoming a real issue in the UK.",
      category: "Parking",
      location: "Leeds",
      amplifiers_count: 4
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 11,
      username: "user11",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 5
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 11,
      username: "user11",
      content: "Does anyone else feel the Parking system is broken?",
      category: "Parking",
      location: "Glasgow",
      amplifiers_count: 17
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 7,
      username: "user7",
      content: "Fines regulations need to be reviewed immediately.",
      category: "Fines",
      location: "Birmingham",
      amplifiers_count: 12
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 15,
      username: "user15",
      content: "Does anyone else feel the Fines system is broken?",
      category: "Fines",
      location: "Glasgow",
      amplifiers_count: 5
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 8,
      username: "user8",
      content: "I can't believe how unfair the Parking situation has become!",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 18
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 16,
      username: "user16",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "Leeds",
      amplifiers_count: 12
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 15,
      username: "user15",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "London",
      amplifiers_count: 0
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 12,
      username: "user12",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "Birmingham",
      amplifiers_count: 5
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 5,
      username: "user5",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 11
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 17,
      username: "user17",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "Birmingham",
      amplifiers_count: 6
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 5,
      username: "user5",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "London",
      amplifiers_count: 10
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 20,
      username: "user20",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "Manchester",
      amplifiers_count: 13
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 11,
      username: "user11",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "Glasgow",
      amplifiers_count: 16
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 19,
      username: "user19",
      content: "Does anyone else feel the Parking system is broken?",
      category: "Parking",
      location: "Birmingham",
      amplifiers_count: 17
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 15,
      username: "user15",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "Glasgow",
      amplifiers_count: 10
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 15,
      username: "user15",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "Glasgow",
      amplifiers_count: 1
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 12,
      username: "user12",
      content: "Fines regulations need to be reviewed immediately.",
      category: "Fines",
      location: "London",
      amplifiers_count: 14
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 6,
      username: "user6",
      content: "What's everyone doing about Fines fines?",
      category: "Fines",
      location: "Birmingham",
      amplifiers_count: 3
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 9,
      username: "user9",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "Birmingham",
      amplifiers_count: 2
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 9,
      username: "user9",
      content: "What's everyone doing about Fines fines?",
      category: "Fines",
      location: "Glasgow",
      amplifiers_count: 12
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 11,
      username: "user11",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "London",
      amplifiers_count: 13
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 19,
      username: "user19",
      content: "I can't believe how unfair the Driving situation has become!",
      category: "Driving",
      location: "Glasgow",
      amplifiers_count: 20
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 11,
      username: "user11",
      content: "I can't believe how unfair the Parking situation has become!",
      category: "Parking",
      location: "Birmingham",
      amplifiers_count: 2
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 15,
      username: "user15",
      content: "I can't believe how unfair the Parking situation has become!",
      category: "Parking",
      location: "Manchester",
      amplifiers_count: 1
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 15,
      username: "user15",
      content: "I can't believe how unfair the Driving situation has become!",
      category: "Driving",
      location: "London",
      amplifiers_count: 1
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 6,
      username: "user6",
      content: "Fines regulations need to be reviewed immediately.",
      category: "Fines",
      location: "Manchester",
      amplifiers_count: 14
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 16,
      username: "user16",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "Cardiff",
      amplifiers_count: 13
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 10,
      username: "user10",
      content: "Does anyone else feel the Fines system is broken?",
      category: "Fines",
      location: "Leeds",
      amplifiers_count: 8
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 12,
      username: "user12",
      content: "What's everyone doing about Fines fines?",
      category: "Fines",
      location: "Glasgow",
      amplifiers_count: 10
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 19,
      username: "user19",
      content: "I can't believe how unfair the Parking situation has become!",
      category: "Parking",
      location: "Leeds",
      amplifiers_count: 16
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 10,
      username: "user10",
      content: "Parking is becoming a real issue in the UK.",
      category: "Parking",
      location: "London",
      amplifiers_count: 8
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 17,
      username: "user17",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "Birmingham",
      amplifiers_count: 16
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 20,
      username: "user20",
      content: "Driving regulations need to be reviewed immediately.",
      category: "Driving",
      location: "Cardiff",
      amplifiers_count: 7
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 16,
      username: "user16",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "London",
      amplifiers_count: 9
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 19,
      username: "user19",
      content: "I can't believe how unfair the Parking situation has become!",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 14
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 5,
      username: "user5",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "Cardiff",
      amplifiers_count: 19
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 17,
      username: "user17",
      content: "I can't believe how unfair the Parking situation has become!",
      category: "Parking",
      location: "Manchester",
      amplifiers_count: 5
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 8,
      username: "user8",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "Leeds",
      amplifiers_count: 11
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 7,
      username: "user7",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "Manchester",
      amplifiers_count: 7
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 14,
      username: "user14",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 13
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 6,
      username: "user6",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "Manchester",
      amplifiers_count: 20
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 7,
      username: "user7",
      content: "Fines is becoming a real issue in the UK.",
      category: "Fines",
      location: "Leeds",
      amplifiers_count: 17
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 11,
      username: "user11",
      content: "I can't believe how unfair the Driving situation has become!",
      category: "Driving",
      location: "Leeds",
      amplifiers_count: 20
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 17,
      username: "user17",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "Manchester",
      amplifiers_count: 12
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 10,
      username: "user10",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "Glasgow",
      amplifiers_count: 1
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 20,
      username: "user20",
      content: "Driving regulations need to be reviewed immediately.",
      category: "Driving",
      location: "Cardiff",
      amplifiers_count: 4
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 8,
      username: "user8",
      content: "What's everyone doing about Fines fines?",
      category: "Fines",
      location: "Leeds",
      amplifiers_count: 9
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 7,
      username: "user7",
      content: "Fines is becoming a real issue in the UK.",
      category: "Fines",
      location: "Leeds",
      amplifiers_count: 14
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 10,
      username: "user10",
      content: "Parking is becoming a real issue in the UK.",
      category: "Parking",
      location: "London",
      amplifiers_count: 16
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 8,
      username: "user8",
      content: "What's everyone doing about Parking fines?",
      category: "Parking",
      location: "London",
      amplifiers_count: 15
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 9,
      username: "user9",
      content: "Does anyone else feel the Parking system is broken?",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 13
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 18,
      username: "user18",
      content: "Parking regulations need to be reviewed immediately.",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 13
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 15,
      username: "user15",
      content: "What's everyone doing about Fines fines?",
      category: "Fines",
      location: "Birmingham",
      amplifiers_count: 7
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 18,
      username: "user18",
      content: "Fines regulations need to be reviewed immediately.",
      category: "Fines",
      location: "London",
      amplifiers_count: 12
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 9,
      username: "user9",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "Birmingham",
      amplifiers_count: 3
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 17,
      username: "user17",
      content: "Does anyone else feel the Driving system is broken?",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 18
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 5,
      username: "user5",
      content: "I can't believe how unfair the Parking situation has become!",
      category: "Parking",
      location: "Manchester",
      amplifiers_count: 10
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 17,
      username: "user17",
      content: "What's everyone doing about Fines fines?",
      category: "Fines",
      location: "Birmingham",
      amplifiers_count: 8
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 19,
      username: "user19",
      content: "Fines is becoming a real issue in the UK.",
      category: "Fines",
      location: "Manchester",
      amplifiers_count: 16
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 6,
      username: "user6",
      content: "I can't believe how unfair the Parking situation has become!",
      category: "Parking",
      location: "Birmingham",
      amplifiers_count: 5
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 15,
      username: "user15",
      content: "I can't believe how unfair the Fines situation has become!",
      category: "Fines",
      location: "Cardiff",
      amplifiers_count: 10
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 14,
      username: "user14",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "London",
      amplifiers_count: 1
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 18,
      username: "user18",
      content: "Parking is becoming a real issue in the UK.",
      category: "Parking",
      location: "Cardiff",
      amplifiers_count: 0
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 18,
      username: "user18",
      content: "Driving regulations need to be reviewed immediately.",
      category: "Driving",
      location: "Glasgow",
      amplifiers_count: 5
    }
  });
  await prisma.voices.create({
    data: {
      user_id: 12,
      username: "user12",
      content: "Driving is becoming a real issue in the UK.",
      category: "Driving",
      location: "Manchester",
      amplifiers_count: 17
    }
  });

  // Seed Comments
  await prisma.comments.create({
    data: {
      voice_id: 1,
      user_id: 9,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 2,
      user_id: 11,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 3,
      user_id: 19,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 3,
      user_id: 8,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 3,
      user_id: 16,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 4,
      user_id: 18,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 4,
      user_id: 9,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 4,
      user_id: 16,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 5,
      user_id: 18,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 5,
      user_id: 10,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 5,
      user_id: 18,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 5,
      user_id: 15,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 6,
      user_id: 6,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 6,
      user_id: 14,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 6,
      user_id: 11,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 6,
      user_id: 5,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 7,
      user_id: 10,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 7,
      user_id: 12,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 7,
      user_id: 18,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 7,
      user_id: 9,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 8,
      user_id: 15,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 8,
      user_id: 14,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 8,
      user_id: 20,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 9,
      user_id: 5,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 9,
      user_id: 20,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 9,
      user_id: 14,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 10,
      user_id: 13,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 10,
      user_id: 18,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 10,
      user_id: 14,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 10,
      user_id: 5,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 10,
      user_id: 19,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 11,
      user_id: 11,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 12,
      user_id: 6,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 12,
      user_id: 16,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 12,
      user_id: 12,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 12,
      user_id: 18,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 12,
      user_id: 11,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 13,
      user_id: 12,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 13,
      user_id: 6,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 13,
      user_id: 11,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 14,
      user_id: 16,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 14,
      user_id: 8,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 14,
      user_id: 14,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 14,
      user_id: 20,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 14,
      user_id: 10,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 15,
      user_id: 18,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 15,
      user_id: 5,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 16,
      user_id: 10,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 16,
      user_id: 12,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 16,
      user_id: 17,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 16,
      user_id: 16,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 16,
      user_id: 14,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 17,
      user_id: 7,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 17,
      user_id: 12,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 17,
      user_id: 13,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 17,
      user_id: 9,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 17,
      user_id: 16,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 18,
      user_id: 10,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 18,
      user_id: 9,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 18,
      user_id: 11,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 18,
      user_id: 19,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 18,
      user_id: 6,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 19,
      user_id: 20,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 20,
      user_id: 16,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 20,
      user_id: 14,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 20,
      user_id: 11,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 21,
      user_id: 19,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 21,
      user_id: 18,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 21,
      user_id: 16,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 22,
      user_id: 9,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 23,
      user_id: 10,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 23,
      user_id: 9,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 23,
      user_id: 9,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 23,
      user_id: 5,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 23,
      user_id: 7,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 24,
      user_id: 12,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 24,
      user_id: 10,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 24,
      user_id: 9,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 25,
      user_id: 19,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 25,
      user_id: 8,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 26,
      user_id: 7,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 27,
      user_id: 9,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 27,
      user_id: 19,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 27,
      user_id: 17,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 27,
      user_id: 14,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 28,
      user_id: 5,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 29,
      user_id: 16,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 29,
      user_id: 15,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 29,
      user_id: 12,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 29,
      user_id: 11,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 29,
      user_id: 19,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 30,
      user_id: 15,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 30,
      user_id: 14,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 30,
      user_id: 6,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 30,
      user_id: 17,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 31,
      user_id: 12,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 31,
      user_id: 14,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 31,
      user_id: 7,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 31,
      user_id: 5,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 31,
      user_id: 12,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 32,
      user_id: 10,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 32,
      user_id: 11,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 33,
      user_id: 11,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 34,
      user_id: 12,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 34,
      user_id: 14,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 34,
      user_id: 7,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 34,
      user_id: 7,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 35,
      user_id: 14,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 36,
      user_id: 20,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 36,
      user_id: 10,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 36,
      user_id: 11,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 36,
      user_id: 6,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 37,
      user_id: 5,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 37,
      user_id: 7,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 37,
      user_id: 12,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 38,
      user_id: 15,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 39,
      user_id: 12,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 39,
      user_id: 10,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 39,
      user_id: 18,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 40,
      user_id: 14,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 40,
      user_id: 16,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 40,
      user_id: 13,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 40,
      user_id: 6,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 41,
      user_id: 5,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 41,
      user_id: 16,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 41,
      user_id: 11,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 42,
      user_id: 18,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 42,
      user_id: 20,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 42,
      user_id: 19,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 42,
      user_id: 15,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 43,
      user_id: 12,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 44,
      user_id: 18,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 44,
      user_id: 10,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 44,
      user_id: 10,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 44,
      user_id: 11,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 44,
      user_id: 14,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 45,
      user_id: 18,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 45,
      user_id: 8,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 45,
      user_id: 14,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 45,
      user_id: 13,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 45,
      user_id: 11,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 46,
      user_id: 5,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 46,
      user_id: 19,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 46,
      user_id: 5,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 46,
      user_id: 11,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 46,
      user_id: 18,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 47,
      user_id: 18,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 47,
      user_id: 17,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 47,
      user_id: 19,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 47,
      user_id: 7,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 48,
      user_id: 5,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 48,
      user_id: 19,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 48,
      user_id: 12,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 48,
      user_id: 13,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 48,
      user_id: 16,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 49,
      user_id: 20,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 49,
      user_id: 20,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 49,
      user_id: 9,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 49,
      user_id: 18,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 50,
      user_id: 9,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 51,
      user_id: 14,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 51,
      user_id: 20,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 51,
      user_id: 7,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 51,
      user_id: 8,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 52,
      user_id: 8,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 52,
      user_id: 9,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 52,
      user_id: 16,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 53,
      user_id: 13,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 53,
      user_id: 19,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 53,
      user_id: 18,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 54,
      user_id: 14,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 54,
      user_id: 19,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 55,
      user_id: 8,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 55,
      user_id: 17,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 55,
      user_id: 11,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 55,
      user_id: 6,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 56,
      user_id: 15,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 56,
      user_id: 6,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 57,
      user_id: 16,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 58,
      user_id: 16,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 59,
      user_id: 7,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 59,
      user_id: 9,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 59,
      user_id: 11,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 60,
      user_id: 15,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 61,
      user_id: 6,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 62,
      user_id: 5,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 63,
      user_id: 12,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 64,
      user_id: 19,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 64,
      user_id: 10,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 64,
      user_id: 14,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 64,
      user_id: 14,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 65,
      user_id: 5,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 65,
      user_id: 5,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 66,
      user_id: 20,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 67,
      user_id: 7,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 67,
      user_id: 7,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 68,
      user_id: 5,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 69,
      user_id: 9,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 69,
      user_id: 12,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 69,
      user_id: 19,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 69,
      user_id: 8,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 70,
      user_id: 13,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 71,
      user_id: 6,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 71,
      user_id: 19,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 71,
      user_id: 17,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 71,
      user_id: 5,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 72,
      user_id: 6,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 72,
      user_id: 6,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 72,
      user_id: 5,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 72,
      user_id: 12,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 72,
      user_id: 14,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 73,
      user_id: 9,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 73,
      user_id: 15,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 73,
      user_id: 11,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 73,
      user_id: 15,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 74,
      user_id: 5,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 74,
      user_id: 15,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 75,
      user_id: 6,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 76,
      user_id: 8,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 76,
      user_id: 13,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 76,
      user_id: 12,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 76,
      user_id: 18,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 77,
      user_id: 12,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 77,
      user_id: 19,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 78,
      user_id: 18,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 78,
      user_id: 16,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 78,
      user_id: 18,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 78,
      user_id: 6,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 78,
      user_id: 5,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 79,
      user_id: 12,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 79,
      user_id: 12,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 79,
      user_id: 9,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 79,
      user_id: 14,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 79,
      user_id: 20,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 80,
      user_id: 16,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 80,
      user_id: 20,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 80,
      user_id: 14,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 81,
      user_id: 10,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 81,
      user_id: 19,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 81,
      user_id: 10,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 82,
      user_id: 14,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 83,
      user_id: 15,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 83,
      user_id: 14,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 83,
      user_id: 14,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 83,
      user_id: 7,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 84,
      user_id: 7,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 85,
      user_id: 17,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 86,
      user_id: 10,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 86,
      user_id: 12,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 86,
      user_id: 7,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 87,
      user_id: 13,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 87,
      user_id: 7,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 87,
      user_id: 15,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 88,
      user_id: 6,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 88,
      user_id: 10,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 88,
      user_id: 20,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 88,
      user_id: 13,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 89,
      user_id: 17,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 89,
      user_id: 14,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 90,
      user_id: 13,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 90,
      user_id: 17,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 90,
      user_id: 8,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 90,
      user_id: 7,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 90,
      user_id: 18,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 91,
      user_id: 14,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 91,
      user_id: 6,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 91,
      user_id: 20,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 92,
      user_id: 14,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 92,
      user_id: 6,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 92,
      user_id: 6,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 93,
      user_id: 16,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 94,
      user_id: 18,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 94,
      user_id: 20,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 94,
      user_id: 19,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 95,
      user_id: 16,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 95,
      user_id: 10,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 95,
      user_id: 7,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 95,
      user_id: 5,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 95,
      user_id: 20,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 96,
      user_id: 12,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 97,
      user_id: 11,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 97,
      user_id: 10,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 97,
      user_id: 17,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 97,
      user_id: 16,
      content: "This needs to be addressed urgently."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 97,
      user_id: 16,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 98,
      user_id: 15,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 98,
      user_id: 11,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 99,
      user_id: 9,
      content: "Totally agree with this!"
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 99,
      user_id: 6,
      content: "I've had a similar issue."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 99,
      user_id: 7,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 99,
      user_id: 7,
      content: "Thanks for sharing your experience."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 99,
      user_id: 16,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 100,
      user_id: 11,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 100,
      user_id: 11,
      content: "This is so unfair."
    }
  });
  await prisma.comments.create({
    data: {
      voice_id: 100,
      user_id: 11,
      content: "This is so unfair."
    }
  });

}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
