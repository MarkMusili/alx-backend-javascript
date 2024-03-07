import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const ClassRoom10 = new ClassRoom(10);
  const ClassRoom20 = new ClassRoom(20);
  const ClassRoom30 = new ClassRoom(30);

  return [ClassRoom10, ClassRoom20, ClassRoom30];
}
