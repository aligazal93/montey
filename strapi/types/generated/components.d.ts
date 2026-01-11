import type { Schema, Struct } from '@strapi/strapi';

export interface TextGoals extends Struct.ComponentSchema {
  collectionName: 'components_text_goals';
  info: {
    displayName: 'goals';
    icon: 'check';
  };
  attributes: {
    goal1: Schema.Attribute.Text;
    goal2: Schema.Attribute.Text;
    goal3: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'text.goals': TextGoals;
    }
  }
}
