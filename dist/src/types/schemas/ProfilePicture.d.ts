import Media from 'types/schemas/Media';
export default interface ProfilePicture {
    current: Media;
    /**
     * History of contact picture if available
     */
    history: Array<Media>;
}
