import ClassRoom from './0-classroom.js';

export default function initializeRooms() {
  const ClassRoom10 = new ClassRoom(10);
  const ClassRoom20 = new ClassRoom(20);
  const ClassRoom34 = new ClassRoom(34);

  return [ClassRoom10, ClassRoom20, ClassRoom34];
}
