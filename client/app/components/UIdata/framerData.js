const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export const Fdata = {
    transition : transition,
    ParentCard: {
        animate: {
            transition: {
                staggerChildren: .04,
                staggerDirection: 1,
            }
        },
        exit: {
            transition: {
                staggerChildren: .02,
                staggerDirection: -1,
            }
        }
    },
    ChildrenCard:{
        initial:{
            x: -50,
            opacity: 0
        },
        animate:{
            x: 0,
            opacity: 1,
            transition: {
                duration: .3,
                transition,
            }
        },
        exit:{
            x: 100,
            opacity: 0,
            transition: {
                duration: .2,
                transition,
            }
        }
    }
}