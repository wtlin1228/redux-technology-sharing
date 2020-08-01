function generateStudentData(id) {
  return {
    id: `id-student-${id}`,
    name: `學生${id}`,
    username: `username-${id}`,
    parent: '唐唐',
    reset: 'reset',
    actions: 'actions',
  }
}

const studentsIdTable = {
  studentlist0: [11, 12, 13, 14],
  studentlist1: [21, 22, 23, 24, 25],
  studentlist2: [34, 35, 36, 37, 38, 39],
}

export function getStudentsByListId(listId) {
  return new Promise((resolve, reject) => {
    setTimeout(function resolveApiResponse() {
      reject()
      resolve({
        listId,
        coachName: '唐唐',
        students: studentsIdTable[`studentlist${listId}`].map(
          generateStudentData
        ),
      })
    }, parseInt(listId) * 500 + 500)
  })
}
