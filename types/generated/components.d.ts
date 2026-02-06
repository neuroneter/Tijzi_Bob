import type { Schema, Struct } from '@strapi/strapi';

export interface HerramientasDirecciones extends Struct.ComponentSchema {
  collectionName: 'components_herramientas_direcciones';
  info: {
    displayName: 'Direcciones';
    icon: 'earth';
  };
  attributes: {
    Celular: Schema.Attribute.BigInteger;
    Latitud: Schema.Attribute.String;
    Longitud: Schema.Attribute.String;
    Tipo: Schema.Attribute.Enumeration<['Principal', 'Sedes', 'Franquicias']>;
  };
}

export interface HerramientasEstablecimientos extends Struct.ComponentSchema {
  collectionName: 'components_herramientas_establecimientos';
  info: {
    displayName: 'Establecimientos';
    icon: 'shoppingCart';
  };
  attributes: {
    Tipo: Schema.Attribute.Enumeration<
      [
        'Antro',
        'Bar',
        'Discoteca',
        'Gimnasio',
        'Hoteles',
        'Moteles',
        'Residencias',
        'SexShop',
        'Spa',
        'Video',
      ]
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Bar'>;
  };
}

export interface HerramientasGenero extends Struct.ComponentSchema {
  collectionName: 'components_herramientas_generos';
  info: {
    displayName: 'Generos';
    icon: 'alien';
  };
  attributes: {
    Tipo: Schema.Attribute.Enumeration<['Gay', 'Hetero', 'Lesbian', 'Trans']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Gay'>;
  };
}

export interface HerramientasRedes extends Struct.ComponentSchema {
  collectionName: 'components_herramientas_redes';
  info: {
    displayName: 'Redes';
    icon: 'heart';
  };
  attributes: {
    Red: Schema.Attribute.Enumeration<
      ['Instagram', 'Facebook', 'X', 'Telegram', 'Youtube', 'TikTok', 'Web']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Instagram'>;
    Usuario: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'herramientas.direcciones': HerramientasDirecciones;
      'herramientas.establecimientos': HerramientasEstablecimientos;
      'herramientas.genero': HerramientasGenero;
      'herramientas.redes': HerramientasRedes;
    }
  }
}
