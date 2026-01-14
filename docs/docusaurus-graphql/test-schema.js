const fs = require('fs');
const { buildSchema } = require('graphql');

try {
  const schemaContent = fs.readFileSync('./schema/schema.graphql', 'utf-8');
  const schema = buildSchema(schemaContent);
  console.log('✅ Schema loaded successfully!');
  console.log('Types:', Object.keys(schema.getTypeMap()).filter(t => !t.startsWith('__')).join(', '));
} catch (error) {
  console.error('❌ Error loading schema:', error.message);
}
