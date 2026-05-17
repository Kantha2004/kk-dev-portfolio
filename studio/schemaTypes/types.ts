import { defineType, defineField } from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'rank', type: 'number', title: 'Display Rank', description: 'Lower numbers appear first (e.g. 1, 2, 3)' }),
    defineField({ name: 'description', type: 'text', validation: (Rule) => Rule.required() }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'stack', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'video', type: 'url', title: 'Video URL' }),
    defineField({
      name: 'links',
      type: 'object',
      fields: [
        { name: 'live', type: 'url' },
        { name: 'repo', type: 'url' },
      ],
    }),
  ],
})

export const skillType = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'level',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'Beginner' },
          { title: 'Intermediate', value: 'Intermediate' },
          { title: 'Advanced', value: 'Advanced' },
          { title: 'Expert', value: 'Expert' },
        ],
      },
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Languages', value: 'Languages' },
          { title: 'Backend', value: 'Backend' },
          { title: 'Frontend', value: 'Frontend' },
          { title: 'Infrastructure & Testing', value: 'Infrastructure & Testing' },
        ],
      },
    }),
  ],
})

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({ name: 'company', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'role', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'period', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'items', type: 'array', of: [{ type: 'string' }] }),
  ],
})

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'email', type: 'string' }),
    defineField({ name: 'aboutText', type: 'text' }),
    defineField({ name: 'aboutHighlights', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'socials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string' },
            { name: 'url', type: 'url' },
          ],
        },
      ],
    }),
  ],
})
