import { ITask } from '../../interfaces/Task';


export class Tasks {
    static tasks: ITask[] = [
        {
            id: 1,
            name: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            estimate: 56,
            stateId: 1

        },
        {
            id: 2,
            name: 'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
            description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            estimate: 4,
            stateId: 2
        },
        {
            id: 3,
            name: '1914 translation by H. Rackham',
            description: '"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.',
            estimate: 24,
            stateId: 2
        },
        {
            id: 4,
            name: 'The standard Lorem Ipsum passage, used since the 1500s',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
            estimate: 12,
            stateId: 3
        }
    ]
}