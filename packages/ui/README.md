# UI package for the design system

This package is for a design system using the atom design concept.

## Setup

On first setup and everytime a file is changed is necessary to run:
```bash
npm run build
```
in order to update all changes (sometimes is also better to restart local server).

## Design system composition

```
.
└── src
│   └── components
│       ├── atoms
│       ├── molecules
│       ├── organisms
│       ├── templates
│       └── pages
└── types
```

### Atoms

- PrimaryButton
- Icon #TODO
- SubTitle #TODO
- Title #TODO
- Label 
- TextBlock 
- Items 
- Stars #IMP

### Molecules

- Card (Title + SubTitle) #IMP
- Right (PrimaryButton)
- Left (Title) #TODO
- Heading (Title + Icon?) #TODO
- Attribute (Label + Text/Items/Stars)
- BottomHeading (SubTitle) #TODO

### Organisms

- Header (Left + Right) #IMP
- List (Card groups)
- TopHeading (Heading + BottomHeading) #TODO
- Sections (Attribute groups)

### Templates

- Layout (Header + ReactNode)

### Pages

- Collection (ReactNode => List)
- Details (ReactNode => TopHeading + Section) #IMP


## Things that could improve

- [] *Sections* be more abstract (find a way to pass which attribute is to separate) 
- [] *PrimaryButton* should have a option to include the icon and which one
