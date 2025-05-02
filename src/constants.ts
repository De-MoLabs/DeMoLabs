/**
 * Constants used throughout the DeMol application
 * Organized by functional categories
 */

// ==========================================
// INTERACTION CONSTANTS
// ==========================================

/**
 * Duration in milliseconds for hover effects
 */
export const HOVER_DURATION = 500;

/**
 * Duration in milliseconds for long touch/press interactions
 */
export const LONG_TOUCH_DURATION = 1000;

/**
 * Interval in milliseconds between animation frames
 */
export const ANIMATION_INTERVAL = 100;

// ==========================================
// CAMERA AND VIEW CONSTANTS
// ==========================================

/**
 * Maximum distance from camera that objects are rendered
 */
export const CAMERA_FAR = 800;

/**
 * Default Z position of camera
 */
export const CAMERA_Z = 150;

/**
 * Minimum distance from camera that objects are rendered
 */
export const CAMERA_NEAR = 100;

/**
 * Distance at which fog effects end
 */
export const CAMERA_FOG_FAR = 200;

/**
 * Default field of view for camera (in degrees)
 */
export const DEFAULT_FOV = 20;

/**
 * Fog effect starting point (normalized 0-1 value)
 */
export const FOG_START = 0.4;

/**
 * Default near clipping plane offset for slab view
 */
export const DEFAULT_SLAB_NEAR = -50;

/**
 * Default far clipping plane offset for slab view
 */
export const DEFAULT_SLAB_FAR = 50;

/**
 * Factor used for adjusting slab thickness
 */
export const SLAB_ADJUSTMENT_FACTOR = 100;

// ==========================================
// MATHEMATICAL CONSTANTS AND CONVERSIONS
// ==========================================

/**
 * Conversion factor from degrees to radians
 */
export const DEGREES_TO_RADIANS = Math.PI / 180.0;

/**
 * Small negative value used for floating point comparisons
 */
export const NEAR_ZERO = -0.0001;

/**
 * Value slightly larger than 1 used for floating point comparisons
 */
export const NEAR_ONE = 1.0001;

/**
 * Threshold for determining when rotation has occurred
 */
export const ROTATION_THRESHOLD = 0.9995;

/**
 * Conversion factor from Bohr radius to Angstrom
 */
export const BOHR_TO_ANGSTROM = 0.529177;

/**
 * Conversion factor from Angstrom to Bohr radius
 */
export const ANGSTROM_TO_BOHR = 1 / BOHR_TO_ANGSTROM;

// ==========================================
// RENDERING AND VOLUME CONSTANTS
// ==========================================

/**
 * Maximum volume size in cubic units
 */
export const MAX_VOLUME = 64000;

/**
 * Size of transfer buffer (in bytes)
 */
export const TRANSFER_BUFFER_SIZE = 256;

/**
 * Factor to adjust mouse wheel delta values
 */
export const WHEEL_DELTA_FACTOR = 600;

/**
 * Factor used for zoom operations
 */
export const ZOOM_FACTOR = 400;

/**
 * Default number of subsamples for rendering
 */
export const DEFAULT_SUBSAMPLES = 5.0;

/**
 * Number of worker threads to use for parallel processing
 */
export const NUM_WORKERS = 4;

// ==========================================
// COLOR CONSTANTS
// ==========================================

/**
 * RGB values for white color
 */
export const WHITE_RGB = {
    r: 255,
    g: 255,
    b: 255
};

// ==========================================
// CANVAS AND UI CONSTANTS
// ==========================================

/**
 * Width of label canvas in pixels
 */
export const LABEL_CANVAS_WIDTH = 134;

// ==========================================
// BIT MASK CONSTANTS
// ==========================================

/**
 * Bit mask for 128
 */
export const BIT_MASK_128 = 128;

/**
 * Bit mask for 256
 */
export const BIT_MASK_256 = 256;

/**
 * Bit mask for 512
 */
export const BIT_MASK_512 = 512;

/**
 * Bit mask for 1024
 */
export const BIT_MASK_1024 = 1024;

/**
 * Bit mask for 2048
 */
export const BIT_MASK_2048 = 2048;

// ==========================================
// SURFACE RENDERING CONSTANTS
// ==========================================

/**
 * Flag indicating surface is in/out
 */
export const SURFACE_IN_OUT = 1;

/**
 * Flag indicating surface processing is complete
 */
export const SURFACE_IS_DONE = 2;

/**
 * Flag indicating surface is bounded
 */
export const SURFACE_IS_BOUND = 4;

/**
 * Default probe radius for surface calculations (in Angstroms)
 */
export const PROBE_RADIUS = 1.4;

/**
 * Default scaling factor for surface calculations
 */
export const DEFAULT_SCALE_FACTOR = 2;

// ==========================================
// MOLECULAR VISUALIZATION CONSTANTS
// ==========================================

/**
 * Default radius for atom representation (in Angstroms)
 */
export const DEFAULT_ATOM_RADIUS = 1.0;

/**
 * Default radius for bond representation (in Angstroms)
 */
export const DEFAULT_BOND_RADIUS = 0.3;

/**
 * Default bond length (in Angstroms)
 */
export const DEFAULT_BOND_LENGTH = 1.5;

/**
 * Factor used to determine if atoms are bonded based on their covalent radii
 */
export const BOND_DISTANCE_FACTOR = 1.2; 