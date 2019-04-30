import { CardText } from 'material-ui/Card'
import React from 'react'

const VoteIntroText = ({competition}) => {
  let heading = ''
  if (competition == 'hugos')
    heading = 'Thank you for participating in the 2019 Hugo Awards, the Lodestar '
     + 'Award and the John W. Campbell Award!'
  else if (competition == 'retro hugos')
    heading = 'Thank you for participating in the 1944 Retrospective Hugo Awards!'    
  return(
  <CardText className="vote-intro" style={{ padding: '16px 32px' }}>
    <h3>
      {heading}
    </h3>

    <h3>How to Vote Online</h3>

    <ol>
      <li>Go to the category you wish to vote for.</li>
      <li>
        Choose the finalist you wish to rank. When you select them, 
        a box appears with all the numbers for possible rankings.
      </li>
      <li>Choose the ranking you wish to give to that finalist.</li>
      <li>
        The finalist will appear according to its ranking above the line. 
        All unranked finalists appear below the line.
      </li>
    </ol>
    <p>
      If you change your mind on how the finalist should be ranked, you 
      can either:
    </p>
    <ul>
      <li>Use the X to remove the ranking.</li>
      <li>Choose the finalist again and change the numerical ranking.</li>
    </ul>
    <p>
      Another way to change the ranking: If you rank a different finalist with
      the same number, the new ranking will take the place of the original. For 
      example if Finalist A is ranked at 1, and you set Finalist B to 1, 
      Finalist A will move to 2 in the ranking.
    </p>
    <p>
      You can make as many changes as you like to your ballot until the deadline.
      Your changes are automatically saved. Your current ballot will be emailed 
      to you 30 minutes after you finish modifying it.
    </p>

    <h3>How Votes are Counted</h3>

    <ul>
      <li>
        To vote, mark your choices in each category in order of preference: 
        "1" for first place, "2" for second place, and so on. 
      </li>
      <li>
        A lower preference is considered only if all the candidates ranked 
        higher have been eliminated. You are not required to rank all the 
        finalists in any category.
      </li> 
      <li>
        If you leave any preference blank, preferences below that will not be 
        counted, and if you leave your first preference blank, your vote will 
        not be counted in that category at all. 
      </li>
      <li>
        If you decide not to vote in any given category, leave it blank. 
      </li>
      <li>
        Note that "No Award" is not an abstention. It means that none of the 
        finalists should be given the award in question. 
      </li>
      <li>
        If you give preference votes to finalists below your ranking of No Award, 
        your vote will count for those finalists if all higher-ranked preferences,
        including No Award, are eliminated. 
      </li>
      <li>
        If you indicate a preference for No Award and leave other finalists blank, 
        your vote will not count for or against those finalists at all. 
      </li>
      <li>
        When the ballots are counted, all the first place votes will be tabulated. 
      </li>
      <li>
        If no finalist receives more than half of the votes, the finalist with the
        fewest first place votes is eliminated, and their votes are transferred to
        the finalists with the next preferences on those ballots. 
      </li>
      <li>
        This process of elimination of the last-placed finalist and redistribution 
        of their votes to the next available preference continues until one 
        finalist has more than half of all remaining votes, at which point that 
        finalist becomes the winner (except under specific conditions described 
        in Sections 3.6 and 3.12 of the <a href="http://www.wsfs.org/wp-content/uploads/2018/09/WSFS-Constitution-as-of-August-21-2018.pdf">WSFS Constitution</a>).
      </li>
    </ul>

    <h3>Deadline for Voting</h3>

    <p>
      The deadline for voting is Wednesday July 31st, 2019 at 11:59 pm PDT 
      (7.59 am, Irish time, on 1 August). Your ballot at that time will be 
      your final vote.
    </p>
    <p>
      Please contact 
      <a href="mailto:hugohelp@dublin2019.com"> hugohelp@dublin2019.com </a> 
      with any queries about the Hugo Awards.
    </p>

  </CardText>
  )
}

export default VoteIntroText
