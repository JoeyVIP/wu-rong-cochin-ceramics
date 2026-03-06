const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

// Read CMS data
const data = JSON.parse(fs.readFileSync('cms-data.json', 'utf-8'));

// Scan templates/ directory for .mustache files
const templatesDir = path.join(__dirname, 'templates');

// Check if templates directory exists
if (!fs.existsSync(templatesDir)) {
  console.log('Templates directory not found. Skipping rebuild.');
  console.log('Note: This is a static site. Templates are optional for CMS integration.');
  process.exit(0);
}

const templates = fs.readdirSync(templatesDir)
  .filter(f => f.endsWith('.mustache'));

if (templates.length === 0) {
  console.log('No Mustache templates found. Skipping rebuild.');
  console.log('Note: This is a static site. Templates are optional for CMS integration.');
  process.exit(0);
}

templates.forEach(templateFile => {
  const template = fs.readFileSync(
    path.join(templatesDir, templateFile), 'utf-8'
  );

  // Flatten nested data for Mustache
  const flatData = {};
  for (const [sectionKey, sectionData] of Object.entries(data)) {
    if (typeof sectionData === 'object' && sectionData !== null) {
      for (const [fieldKey, fieldValue] of Object.entries(sectionData)) {
        flatData[`${sectionKey}.${fieldKey}`] = fieldValue;
      }
    }
    flatData[sectionKey] = sectionData;
  }

  const html = Mustache.render(template, flatData);

  // Remove .mustache suffix
  const outputFile = templateFile.replace('.mustache', '');
  fs.writeFileSync(outputFile, html, 'utf-8');
  console.log(`已重建: ${outputFile}`);
});

console.log('重建完成！');
