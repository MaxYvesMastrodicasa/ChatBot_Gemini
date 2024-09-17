import { FC, useState } from 'react';

type MessageProps = {
    message: string;
    onEdit: (newMessage: string) => void;
    onDelete: () => void;
    onReset: () => void;
    isUserMessage: boolean;
};

const ChatMessage: FC<MessageProps> = ({ message, onEdit, onDelete, onReset, isUserMessage }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedMessage, setEditedMessage] = useState(message);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEdit(editedMessage);
        setIsEditing(false);
    };

    return (
        <div className={`p-4 mb-2 rounded-lg ${isUserMessage ? 'bg-blue-200' : 'bg-gray-200'}`}>
            {isEditing ? (
                <input
                    type="text"
                    className="w-full p-2 rounded-md border border-gray-400"
                    value={editedMessage}
                    onChange={(e) => setEditedMessage(e.target.value)}
                />
            ) : (
                <p>{message}</p>
            )}
            <div className="flex justify-end space-x-2 mt-2">
                {isEditing ? (
                    <button onClick={handleSaveClick} className="bg-green-500 text-white px-2 py-1 rounded">
                        Save
                    </button>
                ) : (
                    <button onClick={handleEditClick} className="bg-yellow-500 text-white px-2 py-1 rounded">
                        Edit
                    </button>
                )}
                <button onClick={onDelete} className="bg-red-500 text-white px-2 py-1 rounded">
                    Delete
                </button>
                {!isUserMessage && (
                    <button onClick={onReset} className="bg-purple-500 text-white px-2 py-1 rounded">
                        Reset
                    </button>
                )}
            </div>
        </div>
    );
};

export { ChatMessage };