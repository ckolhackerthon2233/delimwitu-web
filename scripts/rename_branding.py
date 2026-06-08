from pathlib import Path

root = Path('c:/Users/Felix cole/Desktop/Deli Mwitu-web')
repls = [
    ('Deli Mwitu Cafe', 'Deli Mwitu Restaurant'),
    ('Deli Mwitu cafe', 'Deli Mwitu restaurant'),
    ('Kileleshwa', 'Maralal Oasis Ground Floor'),
    ('Kileleshua', 'Maralal Oasis Ground Floor'),
    ('kileleshwa', 'maralal oasis ground floor'),
    ('kileleshua', 'maralal oasis ground floor'),
]

changed = []
for path in root.rglob('*'):
    if path.is_file() and path.suffix.lower() in {'.ts', '.tsx', '.js', '.jsx', '.md', '.json', '.txt'}:
        text = path.read_text(encoding='utf-8')
        new = text
        for old, new_s in repls:
            new = new.replace(old, new_s)
        if new != text:
            path.write_text(new, encoding='utf-8')
            changed.append(str(path))

print('\n'.join(changed))
