function augmentingPath(graph, start, end)
{
	var seen = [];
	return augmentingPathRecurse(graph, start, end, seen);
}
function augmentingPathRecurse(graph, start, end, seen)
{
seen.push(start);
	for(var int in graph[start])
	{
		var found = false;
		for(var i = 0; i < seen.length; i++)
		{
			if(seen[i] === int)
			{
				found = true;
			}
		}
		if(!found)
		{
			var begin = [];
			if(int === end)
			{
				begin.push(start);
				begin.push(end);
				return begin;
			}
			begin.push(start);
			begin = begin.concat(augmentingPathRecurse(graph, int, end, seen));
			if(begin.length < 2)
			{
				return [];
			} else {
				return begin;
			}
		}

	}
	return [];
}

function testTime()
{
var graph = {'foo': {'boo': 7},
		'boo': {'foo': 3, 'bar': 2},
		'bar': {'boo': 4}};

console.log(augmentingPath(graph, 'foo', 'bar'));
console.log(augmentingPath(graph, 'bar', 'foo'));
graph = {'first': {'second': 2, 'third': 3},
		'second': {'fourth': 4},
		'third': {'fourth': 4},
		'fourth': {'fifth': 5, 'sixth': 6},
		'fifth': {'seventh': 7},
		'sixth': {'seventh': 7},
		'seventh': {'first': 1}
		};
console.log(augmentingPath(graph, 'first', 'seventh'));
console.log(augmentingPath(graph, 'first', 'eighth'));
graph = {'hat': {'watch': 1},
		'jacket': {'hat': 2, 'watch': 1},
		'flannel': {'jacket': 3},
		'shirt': {'flannel': 4},
		'underwear': {'socks': 8},
		'pants': {'shoes': 4, 'shirt': 3},
		'socks': {'pants': 4},
		'watch': {'hat': 1},
		'shoes': {'belt': 4, 'shirt': 4},
		'belt': {'shirt': 3}
		};
console.log(augmentingPath(graph, 'underwear', 'watch'));
console.log(augmentingPath(graph, 'socks', 'flannel'));
}

testTime();
