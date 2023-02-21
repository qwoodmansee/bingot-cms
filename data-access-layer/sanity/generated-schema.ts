import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen';

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: 'post';

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: 'slug'; current: string };

  /**
   * Content — `array`
   *
   *
   */
  content?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Excerpt — `string`
   *
   *
   */
  excerpt?: string;

  /**
   * Cover Image — `image`
   *
   *
   */
  coverImage?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Date — `date`
   *
   *
   */
  date?: string;

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: 'author';

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Picture — `image`
   *
   *
   */
  picture?: {
    _type: 'image';
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Tutorial
 *
 *
 */
export interface Tutorial extends SanityDocument {
  _type: 'tutorial';

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Notes — `array`
   *
   *
   */
  notes?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Youtube Url — `string`
   *
   *
   */
  youtubeUrl?: string;
}

/**
 * Variant
 *
 *
 */
export interface Variant extends SanityDocument {
  _type: 'variant';

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Notes — `array`
   *
   *
   */
  notes?: Array<SanityKeyed<SanityBlock>>;

  /**
   * Tutorial — `array`
   *
   *
   */
  tutorials?: Array<SanityKeyedReference<Tutorial>>;
}

/**
 * Trick
 *
 *
 */
export interface Trick extends SanityDocument {
  _type: 'trick';

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Alternative Name(s) — `array`
   *
   *
   */
  names?: Array<SanityKeyed<string>>;

  /**
   * Variants — `array`
   *
   *
   */
  variants?: Array<SanityKeyedReference<Variant>>;

  /**
   * Is this trick usually required for bingo? — `boolean`
   *
   *
   */
  isUsuallyRequiredForBingo?: boolean;

  /**
   * Is this trick a Fundamental Movement Trick? — `boolean`
   *
   *
   */
  isFundamentalMovement?: boolean;

  /**
   * Is this trick v1 exclusive (across all variants)? — `boolean`
   *
   *
   */
  isV1Only?: boolean;

  /**
   * Notes — `array`
   *
   *
   */
  notes?: Array<SanityKeyed<SanityBlock>>;
}

export type Documents = Post | Author | Tutorial | Variant | Trick;
