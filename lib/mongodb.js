const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://files.catbox.moe/k2s1a1.png' },
    { key: 'ALIVE_MSG', value: '╭━━〔 🤖 ShadowXMD Bot 〕━━\n\n✅ Bot is *Online & Active!*\n⚙️ System: Stable\n📡 Status: Connected\n👨‍💻 Developers: Kavindu Iduwara & Ishan Nimsara\n╰━━━━━━━━━━━━━━━━━━━━━━━╯' },
    { key: 'PREFIX', value: '.' },
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
