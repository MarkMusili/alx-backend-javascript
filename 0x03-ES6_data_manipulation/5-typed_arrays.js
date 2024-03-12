export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const int8View = new Int8Array(buffer);
    int8View[position] = value;
    const view = new DataView(buffer);
    return view;
  } catch (e) {
    throw Error('Position outside range');
  }
}
